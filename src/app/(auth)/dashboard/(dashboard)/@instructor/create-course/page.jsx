"use client";
import MainForm from "@/UiComponents/FormComponents/Forms/MainForm/MainForm";
import { createCourseInputs } from "@/app/(auth)/dashboard/(dashboard)/@instructor/create-course/data";
import { handleRequestSubmit } from "@/helpers/functions/handleSubmit";
import { useToastContext } from "@/Contexts/ToastLoading/ToastLoadingProvider";
import { useSelector } from "react-redux";

export default function CreateCourse() {
  const { setLoading } = useToastContext();
  let { data: instructorData } = useSelector((state) => state.auth);

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
    console.log(req);
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
