"use client";
import { signupInputs } from "./data";
import { handleRequestSubmit } from "../../../../helpers/functions/handleSubmit";
import { pageUrl } from "../../../../Urls/urls";
import Link from "next/link";
import { useToastContext } from "../../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useAuth } from "../../../../Contexts/Auth/AuthProvider";
import AuthForm from "@/UiComponents/FormComponents/Forms/AuthFrom/AuthForm";

export default function SignUpPage() {
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();

  async function handleSignUp(data) {
    await handleRequestSubmit(
      data,
      setLoading,
      "auth/signup",
      false,
      "Signing up...",
      setRedirect,
    );
  }

  const subTitle = (
    <Link href={pageUrl + "/login"}>Already have an account?</Link>
  );
  return (
    <>
      <AuthForm
        btnText={"Sign up "}
        inputs={signupInputs}
        formTitle={"Sign up "}
        onSubmit={handleSignUp}
        subTitle={subTitle}
      />
    </>
  );
}
