import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Avatar, Rating } from "@mui/material";

export const instructorColumns = (setModalData) => [
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => (
      <Box className="flex items-center justify-center h-full">
        <IconButton onClick={() => setModalData(params.row)}>
          <FaEdit />
        </IconButton>
        <IconButton>
          <FaRegTrashAlt />
        </IconButton>{" "}
      </Box>
    ),
  },
  {
    field: "photo",
    headerName: "Photo",
    width: 70,
    renderCell: (params) => (
      <Avatar src={params.value} alt="Instructor Photo" className={"my-1"} />
    ),
  },
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 120 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "duration", headerName: "Duration", width: 80 },
  { field: "isPublished", headerName: "Published", width: 100 },
  {
    field: "category",
    headerName: "Category",
    width: 120,
    valueGetter: (params) => params.name,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
    renderCell: (params) => (
      <Rating name="read-only" value={params.value} readOnly />
    ),
  },
  // isPublished
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    renderCell: (params) => <>{params.value.slice(0, 10)}</>,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
    renderCell: (params) => <>{params.value.slice(0, 10)}</>,
  },
];
