import React, { useState } from "react";

import s from "./index.module.scss";

import { useAppSelector } from "../../hooks/redux";

import CameraCard from "./cameraCard";

const CameraCards = () => {
  const [clickedCamera, setClickedCamera] = useState("");
  const { cameras } = useAppSelector((store) => store.mars);

  return (
    <>
      <h3>Choose a Camera</h3>
      <div className={s.cameras}>
        {cameras.map((camera: any) => (
          <CameraCard
            key={camera.id}
            {...camera}
            clickedCamera={clickedCamera}
            setClickedCamera={setClickedCamera}
          />
        ))}
      </div>
    </>
  );
};

export default CameraCards;
