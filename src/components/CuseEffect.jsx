import React, { useState, useEffect } from 'react';

const CuseEffect = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.title = `you clicked me ${num} times`
    })
    return (
        <>
        <h1>after change</h1>
        <button onClick={() => {setNum(num + 1)}}>click me {num}</button>
        </>
    );
}

export default CuseEffect;