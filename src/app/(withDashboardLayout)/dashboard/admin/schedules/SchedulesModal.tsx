"use client";

import FormDatePicker from "@/components/Form/FormDatePicker";
import FormOfProvider from "@/components/Form/FormOfProvider";
import Modal from "@/components/shared/Modal/modal";
import {  Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { boolean } from "zod";


interface IProps {
    IsOpenModal:boolean;
    setIsOpenModal :React.Dispatch<React.SetStateAction<boolean>>
}

const SchedulesModal = ({ setIsOpenModal, IsOpenModal }:IProps) => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
    setIsOpenModal(false);
  };
  return (
    <Modal
      title="create a new schedule"
      setIsOpenModal={setIsOpenModal}
      IsModalOpen={IsOpenModal}
    >
      <FormOfProvider onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <FormDatePicker name='startDate'/>

          </Grid>
        </Grid>
            <Button type="submit">create</Button>
      </FormOfProvider>
    </Modal>
  );
};

export default SchedulesModal;
