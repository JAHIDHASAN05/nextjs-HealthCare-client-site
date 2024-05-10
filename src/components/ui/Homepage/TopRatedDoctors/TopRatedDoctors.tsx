import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopRatedDoctors = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/doctor?page=1&limit=3`);
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0,100% 25%, 100% 100% ,0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component={"h1"} fontWeight={600} mb={2}>
          Our Top Rated Doctors
        </Typography>
        <Typography component={"p"} mb={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br /> Inventore quidem ab repellendus?
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card >
               <Image src={doctor.profilePhoto} alt="doctor" width={500} height={100}></Image>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {doctor.name}


                  </Typography>
                  <Typography gutterBottom  component="p" sx={{
                    fontSize :'14px',
                    fontWeight :'600',
                    opacity :.6
                  }}>
                 {doctor.qualification} {" "} {doctor.currentWorkingPlace}

                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon/> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
