"use client";
import MainForm from "@/UiComponents/FormComponents/Forms/MainForm/MainForm";
import { createCourseInputs } from "@/app/(auth)/dashboard/(dashboard)/@instructor/create-course/data";
import { handleRequestSubmit } from "@/helpers/functions/handleSubmit";
import { useToastContext } from "@/Contexts/ToastLoading/ToastLoadingProvider";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

async function getCategories() {
  let categories = await fetch("/api/courses/categories").then((res) =>
    res.json(),
  );
  categories = await categories.categories;
  categories = categories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });
  return categories;
}

export default function CreateCourse() {
  const { setLoading } = useToastContext();
  let { data: instructorData } = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    async function createInputs() {
      const categories = await getCategories();
      createCourseInputs[1].data.options = categories;
      setInputs(createCourseInputs);
    }

    createInputs();
  }, []);

  async function createCourse(data) {
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

  if (inputs.length === 0)
    return <div>Please wait fetching course categories</div>;
  return (
    <div className="py-5 pr-5">
      <MainForm
        inputs={inputs}
        onSubmit={createCourse}
        formTitle={"Create Course"}
        subTitle={
          "Create the course here then you will be redirected to create course lessons"
        }
        btnText={"Create Course"}
      />
    </div>
  );
}
