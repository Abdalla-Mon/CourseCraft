"use client";

import { useToastContext } from "../../../../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useAuth } from "../../../../../../Contexts/Auth/AuthProvider";
import { handleRequestSubmit } from "../../../../../../helpers/functions/handleSubmit";
import { pageUrl } from "../../../../../../Urls/urls";
import Link from "next/link";
import MainForm from "../../../../../../UiComponents/FormComponents/Forms/MainForm/MainForm";
import { createCourseInputs } from "./data";

export default function CreateCoursePage() {
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();

  async function handleLogin(data) {
    await handleRequestSubmit(
      data,
      setLoading,
      "auth/login",
      false,
      "Logging in...",
      setRedirect,
    );
  }

  const subTitle = <Link href={pageUrl + "/signup"}>Create an account?</Link>;
  return (
    <>
      <div>Hello</div>
      <MainForm
        btnText={"Login"}
        inputs={createCourseInputs}
        formTitle={"Login to EDU"}
        onSubmit={handleLogin}
        subTitle={subTitle}
      ></MainForm>
    </>
  );
}
