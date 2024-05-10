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

const Register = () => {
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        my={5}
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
             <form action="">
             <Grid container spacing={2}>
                <Grid item md={12} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Name"
                    id="fullWidth"
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
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Address"
                    id="fullWidth"
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button fullWidth>REGISTER</Button>

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
