import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { setGeneralInfo, setSol, setCamera } from "../redux/features/marsSlice";

const actions = { setGeneralInfo, setSol, setCamera };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
