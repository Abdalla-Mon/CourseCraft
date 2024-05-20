("use client");
import { handleRequestSubmit } from "../../../../helpers/functions/handleSubmit";
import { resetInputs, resetPasswordInputs } from "./data";
import Link from "next/link";
import { pageUrl } from "../../../../Urls/urls";
import { useToastContext } from "../../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useAuth } from "../../../../Contexts/Auth/AuthProvider";
import { useRouter } from "next/navigation";
import AuthForm from "@/app/UiComponents/FormComponents/Forms/AuthFrom/AuthForm";

export default function ResetPage({ searchParams }) {
  const { token } = searchParams;
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();
  const router = useRouter();

  async function handleReset(data) {
    try {
      await handleRequestSubmit(
        data,
        setLoading,
        !token ? "auth/reset" : `auth/reset/${token}`,
        false,
        !token ? "Reviewing your email..." : "Resetting your password...",
        setRedirect,
      );
      if (token) {
        router.push(pageUrl + "/login");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const subTitle = <Link href={pageUrl + "/login"}>Back to login page?</Link>;
  return (
    <>
      <AuthForm
        btnText={"Reset"}
        inputs={token ? resetPasswordInputs : resetInputs}
        formTitle={"Reset password"}
        onSubmit={handleReset}
        subTitle={subTitle}
      />
    </>
  );
}
