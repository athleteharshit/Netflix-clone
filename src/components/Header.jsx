import React from 'react';
// import React, { useState } from 'react';
import '../css/style.css';

const Header = (props) => {
    console.log(props);
    return (
        <>
            <h2>hello, I'm {props.name} {props.lname} {props.age} </h2>
            <i>{props.work}</i>
        </>
    );
}


export default Header;