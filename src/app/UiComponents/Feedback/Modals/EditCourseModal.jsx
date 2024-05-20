import { useState } from "react";
import { createCourseInputs } from "@/app/(auth)/dashboard/(dashboard)/@instructor/create-course/data";

export function EditCourseModal({ open, setOpen, courseData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editInputs = createCourseInputs.map((input) => {
    if (input.data.id === "category") {
      return {
        data: { ...input.data, value: courseData.categoryId },
      };
    } else if (input.data.id === "courseImage") {
      return {
        ...input,
        data: { ...input.data, value: courseData["photo"] },
      };
    }
    return {
      ...input,
      data: { ...input.data, value: courseData[input.data.id] },
    };
  });
  console.log(editInputs);
}
