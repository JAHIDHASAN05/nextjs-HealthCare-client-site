import HeroSection from "@/components/ui/Homepage/HeroSection/HeroSection";
import Specialties from "@/components/ui/Homepage/Specilailties/Specialties";
import TopRatedDoctors from "@/components/ui/Homepage/TopRatedDoctors/TopRatedDoctors";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
     <HeroSection/>
     <Specialties/>
     <TopRatedDoctors/>
    </>
  );
};

export default HomePage;
