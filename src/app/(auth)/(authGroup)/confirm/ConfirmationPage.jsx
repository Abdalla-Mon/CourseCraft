"use client";
import { useEffect } from "react";
import { handleRequestSubmit } from "../../../../helpers/functions/handleSubmit";
import { useAuth } from "../../../../Contexts/Auth/AuthProvider";
import { useToastContext } from "../../../../Contexts/ToastLoading/ToastLoadingProvider";
import { useRouter } from "next/navigation";

export default function ConfirmationPage({ token }) {
  const { setLoading } = useToastContext();
  const { isLoggedIn, redirect, emailConfirmed, setRedirect } = useAuth();
  const router = useRouter();
  useEffect(() => {
    async function handleConfirmation() {
      if (redirect) return;
      if (isLoggedIn && emailConfirmed) {
        router.push("/dashboard/");
        return;
      }
      const res = await handleRequestSubmit(
        {},
        setLoading,
        `auth/confirm/${token}`,
        false,
        "Confirming...",
        setRedirect,
      );
      if (res.status === 200) {
        router.push("/dashboard/");
      }
    }

    handleConfirmation();
  }, []);

  return "Confirming...";
}
