import React, { useEffect, useState } from 'react';
import "./Nav.css";
import img from "./img/netflix.png";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src={img}
                alt="Netflix logo"
            />
            
            <img 
                className="nav_avatar"
                src="https://as2.ftcdn.net/jpg/03/35/60/99/500_F_335609932_GFHXStRtzT9leRB17wkkJWJe9qFPQqDX.jpg"
                alt="Netflix logo"
            />
        </div>
    )
}

export default Nav;
