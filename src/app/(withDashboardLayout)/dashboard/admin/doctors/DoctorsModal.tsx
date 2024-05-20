import FormInput from "@/components/Form/FormInput";
import FormOfProvider from "@/components/Form/FormOfProvider";
import FormSelectorInput from "@/components/Form/FormSelectorInput";
import FullScreenModal from "@/components/shared/Modal/FullScreenModal";
import { useCreateDoctorsMutation } from "@/redux/api/doctorsApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Fullscreen } from "@mui/icons-material";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
const DoctorsModal = ({ IsModalOpen, setIsOpenModal }: any) => {

    const [createDoctors]= useCreateDoctorsMutation()
  const handleSubmit = async(values: FieldValues) => {

    console.log(values);

    values.doctor.experience= Number(values.doctor.experience)
    values.doctor.apointmentFee= Number(values.doctor.apointmentFee)
    const formData= modifyPayload(values)
    try {
        const  res= await  createDoctors(formData).unwrap()
        if(res?.id){
            toast.success('doctor created succesfully')
            setIsOpenModal(false)
        }
        
    } catch (error) {
        console.log(error);
    }
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
              name="doctor.name"
              label="your name"
              fullWidth={true}
              placeholder="Your name"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.email"
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
              name="doctor.contactNumber"
              label="contact-number"
              fullWidth={true}
              placeholder="contact-number"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.registrationNumber"
              label="registration-number "
              fullWidth={true}
              placeholder="registration-number"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.address"
              label="address"
              fullWidth={true}
              placeholder="address"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.designation"
              label="designation"
              fullWidth={true}
              placeholder="designation"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.apointmentFee"
              label="apointment-fee"
              fullWidth={true}
              placeholder="apointment-fee"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.experience"
              label="experience"
              fullWidth={true}
              placeholder="experience"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <FormSelectorInput items={Gender} name='doctor.gender'  size="small" label='select your gender' placeholder='select your gender' />

          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.currentWorkingPlace"
              label="currentWorkingPlace"
              fullWidth={true}
              placeholder="Your name"
              type="text"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInput
              name="doctor.qualification"
              label="qualification"
              fullWidth={true}
              placeholder="qualification"
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
