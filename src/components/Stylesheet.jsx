import React from 'react';
import '../css/style.css';
import Style from '../css/style.module.css';

const Stylesheet = (props) => {
    console.log(props);
    let className = props.style ? "demo" : "demo1";
    return (
    <h2 className={`${className} demo2 ${Style.mod}` }>Hello, i am Stylesheet component</h2>
    );
}

export default Stylesheet;