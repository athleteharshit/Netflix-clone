import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState();

  const InputEvent = (e) => {
    setImg(e.target.value);
  };
  console.log(img);
  return (
    <>
      <h1>hii</h1>
      <input
        type="text"
        placeholder="search"
        onChange={InputEvent}
        value={img}
      />
        
      {img === "" ? null : <SearchResult name={img}/>}
    </>
  );
};

export default Search;
