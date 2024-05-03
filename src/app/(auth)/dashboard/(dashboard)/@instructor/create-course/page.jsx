"use client";
import MainForm from "@/UiComponents/FormComponents/Forms/MainForm/MainForm";
import { createCourseInputs } from "@/app/(auth)/dashboard/(dashboard)/@instructor/create-course/data";

export default function CreateCourse() {
  async function createCourse(data) {
    console.log(data);

    // #todo handle post req
    // #todo handle redirect to create course lessons
  }

  return (
    <div className="py-5 pr-5">
      <MainForm
        inputs={createCourseInputs}
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
