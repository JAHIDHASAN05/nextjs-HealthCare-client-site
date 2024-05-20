'use client'
import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import DoctorsModal from "./DoctorsModal";

const DoctorsPage = () => {
  const [IsModalOpen, setIsOpenModal] = React.useState<boolean>(false);
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <TextField placeholder="Search Doctors" />   
      <DoctorsModal setIsOpenModal={setIsOpenModal} IsModalOpen={IsModalOpen}/>
      <Button onClick={()=>setIsOpenModal(!IsModalOpen)}>Create Doctors</Button>
    </Stack>
  );
};

export default DoctorsPage;
