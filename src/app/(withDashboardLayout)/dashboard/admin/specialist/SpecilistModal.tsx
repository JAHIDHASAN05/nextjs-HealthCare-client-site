"use client";

import FormFileUploader from "@/components/Form/FormFileUploader";
import FormInput from "@/components/Form/FormInput";
import FormOfProvider from "@/components/Form/FormOfProvider";
import Modal from "@/components/shared/Modal/modal";
import { useCreateSpecilityMutation } from "@/redux/api/specialitiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  IsModalOpen: boolean;
};

const SpecilistModal = ({ IsModalOpen, setIsOpenModal }: TProps) => {
  const [createSpecility] = useCreateSpecilityMutation();
  const handldeSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);      

    try {
      const res = await createSpecility(data).unwrap();
      if(res?.id){
        toast.success('specility created sucess')
        setIsOpenModal(false)
      }
          
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Modal
      title="create a new speciality"
      IsModalOpen={IsModalOpen}
      setIsOpenModal={setIsOpenModal}
    >
      <FormOfProvider onSubmit={handldeSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <FormInput name="title" label="title" size="small"></FormInput>
          </Grid>
          <Grid item md={6}>
            <FormFileUploader
              name="file"
              label="upload file"
            ></FormFileUploader>
          </Grid>
        </Grid>
        <Button
          sx={{
            marginTop: "10px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </FormOfProvider>
    </Modal>
  );
};

export default SpecilistModal;
