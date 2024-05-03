"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function HandleAuth({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/dashboard/");
  }, [isLoggedIn]);

  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-full z-50  flex justify-center items-center bg-gray-50 p-3">
        {children}
      </div>
    </>
  );
}
