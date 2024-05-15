'use client'

import { getUserInfo, isLoggedIn, removerUser } from "@/service/actions/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo= getUserInfo()
  console.log(userInfo);
  
  const IsloggedInUSer=(isLoggedIn());
  const router= useRouter()
  const handleLogOut=()=>{
     removerUser()
     router.refresh()
  }
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
      { !userInfo?.userId?  <Button component={Link} href="/login">Login</Button>:
        <Button onClick={handleLogOut} >Logout</Button>}
      </Stack>
    </Container>
  );
};

export default Navbar;
