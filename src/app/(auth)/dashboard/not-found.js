"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    if (pathName.includes("/dashboard/")) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md text-center">
        {pathName.includes("/dashboard/") ? (
          <>
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Error 403</h1>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Not allowed to access this page
            </h2>
            <p className="text-gray-500">
              You do not have the necessary permissions to view this page.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Page not found
            </h2>
            <Link className="text-blue-500" href={"/"}>
              Go back to home page
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
