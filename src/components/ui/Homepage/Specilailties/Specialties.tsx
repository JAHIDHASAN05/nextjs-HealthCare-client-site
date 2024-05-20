import { Box, Button, Container, Stack, Typography, rgbToHex } from "@mui/material";
import Image from "next/image";

const Specialties = async () => {
    const res= await fetch(`http://localhost:5000/api/v1/specialties`,{
        next :{
            revalidate : 30
        }
    })
    const {data : specialist }= await res.json()
   
   
    return (
        <Container>
            <Box>
                <Box>
                    <Typography  variant="h4"  fontWeight={700}> Explore TreatMents Across Specialties</Typography>
                    <Typography  component={'p'}   mt={1} mb={2}> Find Experience Doctor Across all Specialties</Typography>
                </Box>
            </Box>
            <Stack direction='row' gap={5} mb={3}>
                {
                    specialist.slice(0,6).map((speciality : any)=> (
                        <Box key={speciality.id}
                        sx={{
                            flex :1,
                            width:'150px',
                            height : '150px',
                            bgcolor : 'rgb(245,245,245,1)',
                            border : '1px solid rgb(245,245,245,1)',
                            display :'flex',
                            alignItems : 'center',
                            justifyContent : "center",
                            flexDirection :'column',
                            borderRadius : '12px',
                            '& img ':{
                               width :'50px',
                               height : '50px'
                            },
                            '&:hover':{
                                border : '1px solid blue'
                               }
                        }}> 
                          <Image src={speciality.icon} alt={`${speciality.title} icon`} width={50} height={50}/>
                          <Box>
                            <Typography fontWeight={600}>{speciality.title}</Typography>
                        </Box>
                        </Box>
                        
                    ))
                }
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} mb={3}>
            <Button variant="outlined"> View All</Button>
            </Stack>

        </Container>
    );
};

export default Specialties;