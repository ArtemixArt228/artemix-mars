import React from "react";

import loader from "../../assets/loader.gif";

import s from "./index.module.scss";

const Loader = () => {
  return (
    <div className={s.container}>
      <img src={loader} alt="Loader" />
    </div>
  );
};

export default Loader;
