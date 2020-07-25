import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/">About us</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/contact">contact us</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/service">service</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/user/harshit/gutpa">user</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/search">search</NavLink><br/>
        
        <a href="/">About us</a> 
        <br/>
        <a href="/contact">contact us</a>
        </>
    );
} 

export default Menu;