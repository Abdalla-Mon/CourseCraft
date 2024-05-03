"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

export default function HandleAuth({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  useEffect(() => {
    if (isLoggedIn && pathName !== "/confirm") router.push("/dashboard/");
  }, [isLoggedIn]);

  return (
    <>
      <div className={"flex bg-gray-50 p-3  w-full h-full min-h-screen"}>
        {children}
      </div>
    </>
  );
}
