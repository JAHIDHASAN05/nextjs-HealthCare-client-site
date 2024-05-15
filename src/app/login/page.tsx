"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/svgs/logo.svg";
import { loginUser } from "@/service/actions/loginUser";
import { storeUserInfo } from "@/service/actions/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Inputs = {
  example: string;
  exampleRequired: string;
};
const Login = () => {
  type Inputs = {
    email: string;
    password: string;
    exampleRequired: string;
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data,'login page data');
    const result = await loginUser(data);
    if (result?.data?.accessToken) {
      toast.success(result.message);

      storeUserInfo({ accessToken: result?.data?.accessToken });
      router.push("/");
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
                Login PH Heathcare
              </Typography>
            </Box>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item md={6} mt={2}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Email"
                      type="email"
                      id="fullWidth"
                      {...register("email")}
                    />
                  </Grid>
                  <Grid item md={6} mt={2}>
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
                </Grid>

                <Typography component={"p"} textAlign={"end"}>
                  Forgot password?
                </Typography>

                <Box my={2}>
                  <Button fullWidth type="submit">
                    Loign
                  </Button>
                  <Typography mt={1} component={"p"} fontWeight={500}>
                    Don&lsquo;t have an account?
                    <Link href={"/register"}> Create an account</Link>
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

export default Login;
