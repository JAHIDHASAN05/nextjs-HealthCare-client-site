"use client";

import Modal from "@/components/shared/Modal/modal";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SpecilistModal from "./SpecilistModal";
import { useDeleteSpecilityMutation, useGetAllSpecilityQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";



const SpecialistPage = () => {



  const [deleteSpecility]= useDeleteSpecilityMutation({})

  const handleDelete = async (id: string) => {
    console.log(id);
    const res=  await deleteSpecility(id).unwrap()
    console.log(res);

    if(res?.id){
      toast.success("Deleted succesfully")
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Image",
      flex: 1,
      renderCell({ row }) {
        return (
          <Box>
            <Image
              src={row.icon}
              alt="specilitly.svg"
              width={100 - 60}
              height={100 - 60}
            />
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      headerAlign :'center',
      align :'center',
      flex: 1,
      renderCell({ row }) {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const { data: specilityData, isLoading } = useGetAllSpecilityQuery({});
  console.log(specilityData);

  const [IsModalOpen, setIsOpenModal] = React.useState<boolean>(false);
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <TextField placeholder="Search Spacilaist" />
        <SpecilistModal
          IsModalOpen={IsModalOpen}
          setIsOpenModal={setIsOpenModal}
        />
        <Button onClick={() => setIsOpenModal(!IsModalOpen)}>
          Create Specialist
        </Button>
      </Stack>

      <Box>
        <Typography
          component={"h1"}
          variant="h2"
          fontWeight={900}
          textAlign={"center"}
        >
          showing all specility
        </Typography>
      </Box>
      {!isLoading ? (
        <Box>
          <DataGrid rows={specilityData || []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default SpecialistPage;
