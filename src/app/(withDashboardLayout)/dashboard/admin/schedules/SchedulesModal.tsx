"use client";

import FormDatePicker from "@/components/Form/FormDatePicker";
import FormOfProvider from "@/components/Form/FormOfProvider";
import FormTimePicker from "@/components/Form/FormTimePicker";
import Modal from "@/components/shared/Modal/modal";
import DateFormmater from "@/utils/DateFormmater";
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
   
    values.startDate= DateFormmater(values.startDate)
    values.endDate= DateFormmater(values.endDate)
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
        <Grid container spacing={2} sx={{
            width :'400px'
        }}>
          <Grid item md={12}>
            <FormDatePicker label="Start Date" name='startDate'/>
          </Grid>
          <Grid item md={12}>
            <FormDatePicker label="End Date" name='endDate'/>
          </Grid>
          <Grid item md={6}>
            <FormTimePicker label="Start Time" name='startTime'/>
          </Grid>
          <Grid item md={6}>
            <FormTimePicker label="End Time" name='endTime'/>
          </Grid>
        </Grid>
            <Button type="submit">create</Button>
      </FormOfProvider>
    </Modal>
  );
};

export default SchedulesModal;
