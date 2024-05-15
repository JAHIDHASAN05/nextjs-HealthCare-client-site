'use client'



import { getUserInfo, isLoggedIn, removerUser } from "@/service/actions/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
  
  const AuthButton= dynamic(() => import("@/components/ui/AuthButton/Authbutton"), { ssr: false })
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
      
      <AuthButton/>

      </Stack>
    </Container>
  );
};

export default Navbar;
