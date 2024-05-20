"use client";

import Modal from "@/components/shared/Modal/modal";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SpecilistModal from "./SpecilistModal";
import { useGetAllSpecilityQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SpecialistPage = () => {
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    { field: "icon", headerName: "Image", width: 130 },
 
 
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
     {!isLoading ?  <Box>
        <DataGrid
          rows={specilityData || []}
          columns={columns}   
        />
      </Box> : <h1>Loading</h1>}
    </Box>
  );
};

export default SpecialistPage;
