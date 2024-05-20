import {
  createCourse,
  getInstructorCourses,
} from "@/lib/services/apiServices/coursesServices";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));
  const instructorId = parseInt(searchParams.get("instructorId"));
  try {
    const courses = await getInstructorCourses(page, limit, instructorId);

    return Response.json({
      status: 200,
      data: courses,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error fetching courses",
    });
  }
}

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
