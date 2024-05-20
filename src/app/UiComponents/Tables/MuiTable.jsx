import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function MuiTable({
  columns,
  data,
  total,
  loading,
  page,
  limit,
  setPage,
  setLimit,
}) {
  const [paginationModel, setPaginationModel] = useState({
    page: page - 1, // Convert to 0-based index
    pageSize: limit,
  });
  useEffect(() => {
    setPaginationModel({
      page: page - 1,
      pageSize: limit,
    });
  }, [page, limit]);
  const handlePaginationChange = (model) => {
    setPage(model.page + 1); // Convert back to 1-based index
    setLimit(model.pageSize);
  };
  return (
    <DataGrid
      rows={data}
      columns={columns}
      paginationModel={paginationModel}
      paginationMode="server"
      rowCount={total}
      loading={loading}
      disableRowSelectionOnClick
      initialState={{
        pagination: {
          paginationModel,
        },
      }}
      pageSizeOptions={[1, 20, 30]} // Customize the page size options
      onPaginationModelChange={handlePaginationChange}
      sx={{
        height: "80vh",
        width: "100%",
        marginRight: "auto",
        marginTop: "50px",
      }}
    />
  );
}
