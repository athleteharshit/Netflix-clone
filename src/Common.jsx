import React from "react";
// import web from '../src/images/img1.svg';
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 order-md-2 d-flex flex-column justify-content-center text-center">
                  <h1>
                    {props.name} <strong className="brand-name">Athleteharshit</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making Best Battle
                    Royal Game
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.link} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-1 order-md-1 header-img ml-5">
                    <img 
                        src={props.img}
                        className="img-fluid animated"
                        alt="home img"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
