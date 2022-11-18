import React from "react";

import { useActions } from "../../../hooks/actions";

import s from "./index.module.scss";

const RoverCard = ({
  name,
  landing_date,
  launch_date,
  status,
  max_sol,
  total_photos,
  cameras,
  clickedCard,
  setClickedCard,
}: any) => {
  const { setGeneralInfo } = useActions();

  return (
    <article
      className={clickedCard === name ? s.activeCard : s.card}
      onClick={() => {
        setClickedCard(name);
        setGeneralInfo({ rover: name, max_sol, cameras });
      }}
    >
      <div>
        <h2>{name}</h2>
        <p className={status === "complete" ? s.complete : ""}>{status}</p>
      </div>
      <p className={s.photos}>
        Total photos: <span>{total_photos}</span>
      </p>
      <div className={s.datesDiv}>
        <p>
          Launch date: <span>{launch_date}</span>
        </p>
        <p>
          Landing date: <span>{landing_date}</span>
        </p>
      </div>
    </article>
  );
};

export default RoverCard;
