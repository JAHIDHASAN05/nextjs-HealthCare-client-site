import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // marginTop:'16px'
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
            width: "700px",
            position: "absolute",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid"></Image>
        </Box>
        <Typography variant="h2" component={"h1"} fontWeight={600}>
          Healthier Herats
        </Typography>
        <Typography variant="h2" component={"h1"} fontWeight={600}>
          comes from
        </Typography>
        <Typography
          variant="h2"
          component={"h1"}
          color={"primary.main"}
          fontWeight={600}
        >
          Prevented care
        </Typography>
        <Typography
          component={"p"}
          sx={{
            width: "50%",
            marginTop: "2rem",
            fontSize :'18px'
          }}

          fontWeight={50}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
          odio, dignissimos qui incidunt sunt similique officia natus quam
          necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nulla, voluptatibus!
        </Typography>
        <Stack direction={'row'} gap={5} mt={4}  >
            <Button>Make appointment</Button>
            <Button variant="outlined">Contack us</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          border: "1px solid red",
        }}
      >
        rihgt
      </Box>
    </Container>
  );
};

export default HeroSection;
