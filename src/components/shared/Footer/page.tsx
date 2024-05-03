import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,24,32)" py={5}>
      <Container>
        <Stack
          color={"white"}
          direction={"row"}
          justifyContent={"center"}
          gap={5}
        >
          <Typography component={Link} href={"/consultaion"} color={"white"}>
            Consultation
          </Typography>
          <Typography color={"white"}>Medicine</Typography>
          <Typography color={"white"}>Diagonistick</Typography>
          <Typography color={"white"}>Consultation</Typography>
          <Typography color={"white"}>Consultation</Typography>
          <Typography color={"white"}>Consultation</Typography>
        </Stack>
        <Stack
          color={"white"}
          direction={"row"}
          justifyContent={"center"}
          gap={5}
          marginTop={3}
        >
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            }
            alt="facebook"
            width={50}
            height={50}
          />
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            }
            alt="facebook"
            width={50}
            height={50}
          />
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            }
            alt="facebook"
            width={50}
            height={50}
          />
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            }
            alt="facebook"
            width={50}
            height={50}
          />
        </Stack>
        <div className="border border-b-bottom border-dotted mt-8 mx-44"></div>

        <Stack direction={'row'} justifyContent={'space-evenly'} marginTop={2} alignContent={'center'}>
          <Typography color={'white'}> @copy : All right reserved By Jahid hasan</Typography>
          <Typography variant="h5" color={'white'} component={Link} href="/" fontWeight={700}>
            P
            <Box component={"span"} color="primary.main">
              H
            </Box>{" "}
            Health care
          </Typography>
          <Typography color={'white'}>Terms && Condition</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
