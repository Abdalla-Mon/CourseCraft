import prisma from "../../../../../lib/pirsma/prisma"; // adjust the path according to your project structure
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request, { params }) {
  const { token: confirmationToken } = params;

  const cookieStore = cookies();
  if (!confirmationToken)
    return Response.json({
      message: "No confirmation token provided",
      status: 500,
    });
  try {
    const user = await prisma.User.findUnique({
      where: {
        confirmationToken: confirmationToken,
      },
    });

    if (!user || Date.now() > user.confirmationExpires) {
      return Response.json({
        message: "Invalid or expired confirmation token",
        status: 500,
      });
    }
    if (user.emailConfirmed) {
      return Response.json({
        message: "Email has already been confirmed",
        status: 400,
      });
    }
    await prisma.User.update({
      where: {
        confirmationToken: confirmationToken,
      },
      data: {
        confirmationToken: null, // Clear the confirmation token
        confirmationExpires: null, // Clear the token expiry time
        emailConfirmed: true,
      },
    });
    const jwtToken = jwt.sign({ userId: user.id }, SECRET_KEY);
    await cookieStore.set({
      name: "token",
      value: jwtToken,
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return Response.json({
      message: "Email confirmed redirecting...",
      user,
      redirect: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "An error occurred" });
  }
}
