import { handleRequestSubmit } from "@/helpers/functions/handleSubmit";

export async function createCourse(data, instructorData, setLoading) {
  const file = data.courseImage[0];
  const filePath = `courseImages/${file.name}`;

  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === "courseImage") {
      formData.append(key, file, filePath);
    } else {
      formData.append(key, data[key]);
    }
  });
  formData.append("instructorId", instructorData.id);
  const req = await handleRequestSubmit(
    formData,
    setLoading,
    "courses",
    true,
    "Creating Course...",
  );
  // #todo handle redirect to create course lessons
}

export async function getInstructorCourses(page, limit, instructorId) {
  const res = await fetch(
    `/api/courses/?page=${page}&limit=${limit}&instructorId=${instructorId}`,
  );
  const data = await res.json();
  return data;
}
