import React from "react";

import s from "./index.module.scss";

import { useActions } from "../../../hooks/actions";

const CameraCard = ({
  name,
  full_name,
  clickedCamera,
  setClickedCamera,
}: {
  name: string;
  full_name: string;
  clickedCamera: string;
  setClickedCamera: Function;
}) => {
  const { setCamera } = useActions();

  return (
    <article
      className={clickedCamera === name ? s.activeCameraCard : s.cameraCard}
      onClick={() => {
        setClickedCamera(name);
        setCamera(name);
      }}
    >
      {full_name}
    </article>
  );
};

export default CameraCard;
