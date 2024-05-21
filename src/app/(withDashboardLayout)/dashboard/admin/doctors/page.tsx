'use client'
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import DoctorsModal from "./DoctorsModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
const DoctorsPage = () => {
  const [IsModalOpen, setIsOpenModal] = React.useState<boolean>(false);

  const {data, isLoading}= useGetAllDoctorsQuery({})

  const allDoctors=data?.doctors

  const meta= data?.meta
  console.log(meta);

  const columns: GridColDef[] = [
    { field: "name", headerName: "name",  flex :1 },
    { field: "email", headerName: "email",  flex :1 },
    { field: "contactNumber", headerName: "Contack Number",  flex :1 },
   
    {
      field: "Action",
      headerName: "Action",
      headerAlign :'center',
      align :'center',
      flex: 1,
      renderCell({ row }) {
        return (
          <IconButton onClick={()=>handleDoctorDelete(row.id)}  aria-label="delete">
            <DeleteIcon  />
          </IconButton>
        );
      },
    },
  ];


  const handleDoctorDelete = async (id: string) => {  
    console.log(id)
  };
  return (
    <>
    <Stack direction={"row"} justifyContent={"space-between"}>
      <TextField placeholder="Search Doctors" />   
      <DoctorsModal setIsOpenModal={setIsOpenModal} IsModalOpen={IsModalOpen}/>
      <Button onClick={()=>setIsOpenModal(!IsModalOpen)}>Create Doctors</Button>

     
    </Stack>

      {!isLoading ? (
        <Box>
          <DataGrid rows={[...allDoctors] ||[]} columns={columns}  />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    

</>
  );
};

export default DoctorsPage;
