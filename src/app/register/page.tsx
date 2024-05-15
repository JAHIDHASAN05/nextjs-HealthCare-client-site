 'use client'
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/service/actions/registerPatient";
import {  Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/service/actions/loginUser";
import { storeUserInfo } from "@/service/actions/auth.services";

const Register = () => {

  const router= useRouter()

  interface IPatientData {
    name:string;
    email: string;
    contactNumber: string;
    address: string
  }


  interface IPatientRegisterFormData {
    password :string;
    patient:IPatientData;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>()
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async(values) => {
    console.log(values);
      const data= modifyPayload(values)
      console.log(data, 'register data');

      try{
        const result = await registerPatient(data)
        console.log(result, "tows5t");
        if(result.success){
          toast.success(result.message)
          const Loginresult = await loginUser({password:values.password , email:result.data.email});
          console.log(Loginresult,'loging res');
          if (Loginresult?.data?.accessToken) {
            storeUserInfo({ accessToken:Loginresult?.data?.accessToken });
            router.push("/");
          }     
        }
      }
      catch(err){
       console.log(err);
      }

   
  }



  return (
    <Container>
            

      <Stack
        sx={{
            height : '100vh',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 2,
            p: 4,
            borderRadius: 1,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box>
              <Image src={Logo} alt="loginlogo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={900}>
                patient register
              </Typography>
            </Box>
            <Box>
             <form onSubmit={handleSubmit(onSubmit)}>
             <Grid container spacing={2}>
                <Grid item md={12} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Name"
                    id="fullWidth"
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Email"
                    type="email"
                    id="fullWidth"
                    {...register("patient.email")}

                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="password"
                    label="Password"
                    id="fullWidth"
                    {...register("password")}

                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="tel"
                    label="Contact-Number"
                    id="fullWidth"
                    {...register("patient.contactNumber")}

                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Address"
                    id="fullWidth"
                    {...register("patient.address")}

                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth>REGISTER</Button>

                <Typography mt={1} component={"p"} fontWeight={500}>
                  Do you already have an account?
                  <Link href={"/login"}>Login</Link>
                </Typography>
              </Box>
             </form>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
