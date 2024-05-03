import { createCourse } from "@/app/api/courses/coursesServices";

export async function POST(request) {
  let body = await request.formData();
  body = Object.fromEntries(body);
  try {
    await createCourse(body);

    return Response.json({
      status: 200,
      message: "Course created successfully",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error creating course",
    });
  }
}
