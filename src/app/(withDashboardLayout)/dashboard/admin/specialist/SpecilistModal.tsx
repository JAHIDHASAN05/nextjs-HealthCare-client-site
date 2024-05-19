"use client";

import FormFileUploader from "@/components/Form/FormFileUploader";
import FormInput from "@/components/Form/FormInput";
import FormOfProvider from "@/components/Form/FormOfProvider";
import Modal from "@/components/shared/Modal/modal";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  IsModalOpen: boolean;
};

const handldeSubmit=(values:FieldValues)=>{

}

const SpecilistModal = ({ IsModalOpen, setIsOpenModal }: TProps) => {
  return (
    <Modal
      title="create a new speciality"
      IsModalOpen={IsModalOpen}
      setIsOpenModal={setIsOpenModal}
    >
  <FormOfProvider onSubmit={handldeSubmit}>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <FormInput
                 name='create'label="title" size='small'
                ></FormInput>       
            </Grid>
            <Grid item md={6}>
                <FormFileUploader            
                ></FormFileUploader>       
            </Grid>
        </Grid>
         <Button sx={{
            marginTop :'10px'
         }} type='submit' >Submit</Button>
        </FormOfProvider>
    </Modal>
  );
};

export default SpecilistModal;
