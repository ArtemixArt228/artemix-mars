import React from "react";

import s from "./index.module.scss";

import mars from "../../assets/mars-18176.png";
import rover from "../../assets/rover.png";

import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.container}>
      <div style={{ textAlign: "center" }}>
        <h1 className={s.headline}>
          <Typewriter
            words={["Are you ready to explore new sides of MARS ?"]}
            cursor
            cursorStyle="_"
            loop={1}
          />
        </h1>
        <Link className={s.btnLink} to="/view">
          Get Started
        </Link>
      </div>

      <img className={s.mars} src={mars} alt="Mars" />
      <img className={s.rover} src={rover} alt="Mars" />
    </div>
  );
};

export default Home;
