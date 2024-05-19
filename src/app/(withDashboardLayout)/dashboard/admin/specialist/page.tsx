'use client'




import Modal from '@/components/shared/Modal/modal';
import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react';
import SpecilistModal from './SpecilistModal';

const SpecialistPage = () => {

    const [IsModalOpen, setIsOpenModal]=React.useState<boolean>(false)
    return (
       <Box>
        <Stack  direction={'row'} justifyContent={'space-between'}>
          
          <TextField    placeholder='Search Spacilaist'  /> 
            <SpecilistModal IsModalOpen={IsModalOpen} setIsOpenModal={setIsOpenModal}/>
        
            <Button onClick={()=>setIsOpenModal(!IsModalOpen)}  >Create Specialist</Button>
         
        </Stack>

       </Box>
    );
};

export default SpecialistPage;