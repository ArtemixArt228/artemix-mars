import React, { useState } from "react";

import { Slider, Box } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/actions";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SliderSol = () => {
  const { max_sol, sol } = useAppSelector((store) => store.mars);
  const [countSol, setCountSol] = useState(0);

  const { setSol } = useActions();

  return (
    <>
      <h3 style={{ marginTop: "20px" }}>Choose a Sol</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <button
          onClick={() => {
            setSol(sol - 1);
            setCountSol((prevValue: number) => prevValue - 1);
          }}
        >
          <RemoveIcon />
        </button>
        <p style={{ fontSize: "22px" }}>{countSol}</p>
        <button
          onClick={() => {
            setSol(sol - 1);
            setCountSol((prevValue: number) => prevValue + 1);
          }}
        >
          <AddIcon />
        </button>
      </Box>
      <Box
        width="90%"
        marginY={3}
        marginX={"auto"}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <p>0</p>
        <Slider
          style={{
            color: "#e53170",
            margin: "10px 30px",
          }}
          onChange={(e: any) => {
            setSol(e!.target!.value);
            setCountSol(e!.target!.value);
          }}
          defaultValue={sol}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={max_sol}
        />
        <p>{max_sol}</p>
      </Box>
    </>
  );
};

export default SliderSol;
