import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import chooseUs from "@/assets/choose-us.png";
import Image from "next/image";
import { Margin } from "@mui/icons-material";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];
const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component={"h1"}
            fontWeight={900}
          >
            why us
          </Typography>
          <Typography variant="h4" component={"h1"} fontWeight={700}>
            why Choose us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5} >
          <Grid item md={6} sx={{
            display:'flex',
            flexDirection:'column',
            gap:'1.5rem'
          }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                bgcolor: "rgba(245,245,245,1)",
                padding: "1rem",
                borderRadius: "1.5rem",
                borderBottomRightRadius: "6rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="assets.svgs.award"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component={"h1"}
                  sx={{ color: "black" }}
                >
                  {servicesData[0].title}
                </Typography>
                <Typography component={"p"}>
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                bgcolor: "rgba(245,245,245,1)",
                padding: "1rem",
                borderRadius: "1.5rem",
                borderTopRightRadius: "6rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imageSrc}
                  alt="assets.svgs.award"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component={"h1"}
                  sx={{ color: "black" }}
                >
                  {servicesData[1].title}
                </Typography>
                <Typography component={"p"}>
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
           
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                bgcolor: "rgba(245,245,245,1)",
                padding: "1rem",
                borderRadius: "1.5rem",
                borderBottomRightRadius: "6rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  alt="assets.svgs.award"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component={"h1"}
                  sx={{ color: "black" }}
                >
                  {servicesData[2].title}
                </Typography>
                <Typography component={"p"}>
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                bgcolor: "rgba(245,245,245,1)",
                padding: "1rem",
                borderRadius: "1.5rem",
                borderTopRightRadius: "6rem",
                
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  alt="assets.svgs.award"
                  width={50}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component={"h1"}
                  sx={{ color: "black" }}
                >
                  {servicesData[3].title}
                </Typography>
                <Typography component={"p"}>
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} >
            <Box sx={{
              margin :'0 auto',
              width: 'fit-content'
            }}>
            <Image src={chooseUs} alt="chooseUs" width={435} />

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
