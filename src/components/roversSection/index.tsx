import React, { useState } from "react";

import { useGetRoversQuery } from "../../redux/services/mars";

import s from "./index.module.scss";

import RoverCard from "./roverCard";
import Loader from "../loader";
import Error from "../../pages/error";

const RoverSection = () => {
  const [clickedCard, setClickedCard] = useState("");

  const { data: rovers, isLoading, isError } = useGetRoversQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <h3>Choose a Rover</h3>
      <div className={s.boxRover}>
        {rovers?.map((rover: any, i: number) => (
          <RoverCard
            key={i}
            {...rover}
            clickedCard={clickedCard}
            setClickedCard={setClickedCard}
          />
        ))}
      </div>
    </>
  );
};

export default RoverSection;
