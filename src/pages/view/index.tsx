import React from "react";

import { useAppSelector } from "../../hooks/redux";

import SliderSol from "../../components/sliderSol";
import CameraCards from "../../components/cameraCards";
import Gallery from "../../components/gallery";
import RoversSection from "../../components/roversSection";

import { Box } from "@mui/material";

const View = () => {
  const { rover, sol, camera } = useAppSelector((store) => store.mars);
  console.log(rover && sol !== 0 && camera);

  return (
    <Box maxWidth="1200px" marginX="auto" padding={3}>
      <RoversSection />
      {rover && <SliderSol />}
      {rover && sol !== 0 && <CameraCards />}
      {rover && sol !== 0 && camera && <Gallery />}
    </Box>
  );
};

export default View;
