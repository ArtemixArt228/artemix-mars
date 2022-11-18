import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  rover: "",
  max_sol: 0,
  cameras: [],
  sol: 0,
  camera: "",
};

export const marsSlice = createSlice({
  name: "mars",
  initialState,
  reducers: {
    setGeneralInfo: (state, action: PayloadAction<any>) => {
      state.rover = action.payload.rover;
      state.max_sol = action.payload.max_sol;
      state.cameras = action.payload.cameras;
    },
    setSol: (state, action: PayloadAction<number>) => {
      state.sol = action.payload;
    },
    setCamera: (state, action: PayloadAction<string>) => {
      state.camera = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGeneralInfo, setSol, setCamera } = marsSlice.actions;

export default marsSlice.reducer;
