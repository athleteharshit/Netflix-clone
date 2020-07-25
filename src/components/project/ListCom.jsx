import React, { useState } from 'react';

const ListCom =(props) => {
    const [line, setLine] = useState(false)

    const cutIt = () => setLine(true)

    return (
        <>
           <span onClick={cutIt}>del</span>
           <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </>
    )
}

export default ListCom;