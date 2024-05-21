'use client'
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DoctorsModal from "./DoctorsModal";
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from "@/redux/api/doctorsApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";
const DoctorsPage = () => {
  const [IsModalOpen, setIsOpenModal] = React.useState<boolean>(false);
    const query:Record<string, any>={}

    const [seachTerm, setSearchTerm]= useState('')

    const DebounceTerm= useDebounced({
      searchQuery :seachTerm,
      delay:600
    })

    if(!!DebounceTerm){
      
      query['searchTerm']=(seachTerm)
    
    }
    const {data, isLoading}= useGetAllDoctorsQuery({...query})
 
    
  const allDoctors=data?.doctors

  const meta= data?.meta
  

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

   const [deleteDoctor]= useDeleteDoctorMutation()
  const handleDoctorDelete = async (id: string) => {  

    
    try {
     const res= await deleteDoctor(id).unwrap()
     if(res?.id){
      toast.success('Dortors deleted succesfully')
     }
    
   } catch (error:any) {
    console.log(error.message);
   }
   ;
  };
  return (
    <>
    <Stack direction={"row"} justifyContent={"space-between"}>
      <TextField placeholder="Search Doctors" onChange={(e)=> setSearchTerm(e.target.value)} />   
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
