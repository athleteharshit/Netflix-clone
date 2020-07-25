import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Pokemon = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

  useEffect(() => {
      async function getData() {
          const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          console.log(res);
          setName(res.data.name)
          setMoves(res.data.moves.length)
      }
      getData();
  });


    return (
        <>
        <h1>you chosse this {num} value</h1>
        <h1> poke mon is <span style={{color: "red"}}>{name}  </span> and</h1>
        <h1> poke mon <span style={{color: "red"}}>{moves} </span> </h1>

        <select value={num} onChange={(event) => {
            setNum(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    );
}


export default Pokemon;