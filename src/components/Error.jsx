import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <h1 className="text-center">OOPS! Error found</h1>
            <NavLink to='/'> go back </NavLink>
        </>
    );
}
export default Error;