import prisma from "@/lib/pirsma/prisma";

export async function GET() {
  try {
    let categories = await prisma.Category.findMany();
    return Response.json({
      categories: categories,
      status: 200,
    });
  } catch (e) {
    console.log(e.message);
    return Response.json({
      message: e.message,
      status: 500,
    });
  }
}
