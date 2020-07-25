import React from "react";
import Common from "./Common";
import web from "../src/images/logo1.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        link="/service"
        img={web}
        btn="Contact Me"
      />
    </>
  );
};

export default About;
