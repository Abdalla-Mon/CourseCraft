import MuiTable from "@/app/UiComponents/Tables/MuiTable";
import { useState } from "react";
import { EditCourseModal } from "@/app/UiComponents/Feedback/Modals/EditCourseModal";
import { instructorColumns } from "@/app/UiComponents/Tables/columns";

export function InstructorCoursesTable({
  data,
  total,
  loading,
  page,
  limit,
  setPage,
  setLimit,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  function setModalData(data) {
    setEditData(data);
    setModalOpen(true);
  }

  console.log(editData);

  const columns = instructorColumns(setModalData);
  return (
    <>
      {modalOpen && editData && (
        <EditCourseModal
          open={modalOpen}
          setOpen={setModalOpen}
          courseData={editData}
        />
      )}
      <MuiTable
        loading={loading}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        page={page}
        total={total}
        data={data}
        columns={columns}
      />
    </>
  );
}
