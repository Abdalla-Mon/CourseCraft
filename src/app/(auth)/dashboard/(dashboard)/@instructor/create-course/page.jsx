"use client";
import MainForm from "@/app/UiComponents/FormComponents/Forms/MainForm/MainForm";
import { createCourseInputs } from "@/app/(auth)/dashboard/(dashboard)/@instructor/create-course/data";
import { useToastContext } from "@/Contexts/ToastLoading/ToastLoadingProvider";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createCourse } from "@/lib/services/clientServices/coursesSdk";

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
  const { setLoading: setToastLoading } = useToastContext();
  let { data: instructorData } = useSelector((state) => state.auth);
  const [categoriesLoading, setCategoriesLoading] = useState({
    category: true,
  });
  const getSelectData = {
    category: async () => getCategories(),
  };

  return (
    <div className="py-5 pr-5">
      <MainForm
        inputs={createCourseInputs}
        onSubmit={(data) => createCourse(data, instructorData, setToastLoading)}
        formTitle={"Create Course"}
        subTitle={
          "Create the course here then you will be redirected to create course lessons"
        }
        btnText={"Create Course"}
        loading={categoriesLoading}
        setLoading={setCategoriesLoading}
        getSelectData={getSelectData}
      />
    </div>
  );
}
