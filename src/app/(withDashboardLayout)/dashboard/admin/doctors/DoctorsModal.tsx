import FormInput from "@/components/Form/FormInput";
import FormOfProvider from "@/components/Form/FormOfProvider";
import FormSelectorInput from "@/components/Form/FormSelectorInput";
import FullScreenModal from "@/components/shared/Modal/FullScreenModal";
import { Gender } from "@/types";
import { Fullscreen } from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
const DoctorsModal = ({ IsModalOpen, setIsOpenModal }: any) => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <FullScreenModal setIsOpenModal={setIsOpenModal} IsModalOpen={IsModalOpen}>
      <FormOfProvider onSubmit={handleSubmit}>
      

        <Grid
          container
          spacing={2}

          sx={{
            padding: "5rem",
            my :5,
            pb :0
          }}
        >
          <Grid item  xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.name"
              label="your name"
              fullWidth={true}
              placeholder="Your name"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.email"
              label="Your Email"
              fullWidth={true}
              placeholder="Your Eamil"
              type="email"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="password"
              label="password"
              fullWidth={true}
              placeholder="password"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.contactNumber"
              label="contact-number"
              fullWidth={true}
              placeholder="contact-number"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.registrationNumber"
              label="registration-number "
              fullWidth={true}
              placeholder="registration-number"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.Address"
              label="address"
              fullWidth={true}
              placeholder="address"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.designation"
              label="designation"
              fullWidth={true}
              placeholder="designation"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.apointmentFee"
              label="apointment-fee"
              fullWidth={true}
              placeholder="apointment-fee"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.experience"
              label="experience"
              fullWidth={true}
              placeholder="experience"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <FormSelectorInput items={Gender} name='doctors.gender'  size="small" label='select your gender' placeholder='select your gender' />

          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.currentWorkingPlace"
              label="currentWorkingPlace"
              fullWidth={true}
              placeholder="Your name"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctors.qualification"
              label="your name"
              fullWidth={true}
              placeholder="Your name"
              type="text"
              size="small"
            />
          </Grid>
          
        </Grid>

        <Box display={'flex'} justifyContent={'center'} >
            <Button type="submit">Create</Button>
        </Box>
       
      </FormOfProvider>
    </FullScreenModal>
  );
};

export default DoctorsModal;
