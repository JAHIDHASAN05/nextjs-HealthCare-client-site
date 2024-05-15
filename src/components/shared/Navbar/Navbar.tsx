'use client'

import { getUserInfo, isLoggedIn } from "@/service/actions/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo= getUserInfo()
  console.log(userInfo, "form nav");
  console.log(isLoggedIn());
  return (
    <Container>
      <Stack py={2} direction={"row"} justifyContent="space-between" alignItems={'center'}>
        <Typography variant="h5" component={Link} href="/" fontWeight={700}>
          P
          <Box component={"span"} color="primary.main">
            H
          </Box>{" "}
          Health care
        </Typography>
        <Stack direction="row" justifyContent={"space-between"} gap={4}>
          <Typography component={Link} href="/consultaion">Consultaion </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagonostic</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button component={Link} href="/login">Login</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
