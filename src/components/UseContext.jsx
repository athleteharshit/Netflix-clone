import React, { useContext } from 'react';
import {firstName, lastName} from '../App';

const UseContext = () => {
    const fName = useContext(firstName);
    const lName = useContext(lastName);
    return (
        <>
        <h1>I am {fName} {lName}</h1>
        </>
    );
}

export default UseContext;