"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import SchedulesModal from "./SchedulesModal";

const SchedulesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  return (
    <>
      <SchedulesModal  IsOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <Button onClick={()=>setIsOpenModal(!isOpenModal)} >Create Schedulce</Button>
    </>
  );
};

export default SchedulesPage;
