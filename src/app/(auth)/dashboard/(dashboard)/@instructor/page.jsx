"use client";
import { useGetData } from "@/lib/hooks/useGetdata";
import { getInstructorCourses } from "@/lib/services/clientServices/coursesSdk";
import { useSelector } from "react-redux";
import { InstructorCoursesTable } from "@/app/UiComponents/Tables/InstructorTable";

export default function page() {
  const auth = useSelector((state) => state.auth);
  const { data: user } = auth;
  const { data, total, page, limit, loading, setLimit, setPage, error } =
    useGetData(getInstructorCourses, user.id);
  if (error) return <div>Error fetching courses</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={"w-full p-3"}>
      <InstructorCoursesTable
        setPage={setPage}
        setLimit={setLimit}
        data={data}
        total={total}
        loading={loading}
        page={page}
        limit={limit}
      />
    </div>
  );
}
