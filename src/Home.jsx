import React from "react";
import web from "../src/images/img1.svg";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Game Devlopement Skill"
        link="/"
        img={web}
        btn="Get Started"
      />
    </>
  );
};

export default Home;
