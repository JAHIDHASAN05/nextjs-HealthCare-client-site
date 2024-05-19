'use client'

import Modal from "@/components/shared/Modal/modal";
import { TextField } from "@mui/material";
import React from "react";


type TProps ={
    setIsOpenModal :React.Dispatch<React.SetStateAction<boolean>>;
    IsModalOpen:boolean
}

const SpecilistModal = ({IsModalOpen, setIsOpenModal}:TProps) => {
    return <Modal title='create spacialist' IsModalOpen={IsModalOpen} setIsOpenModal={setIsOpenModal}>
        <TextField/>
    </Modal>
};

export default SpecilistModal;