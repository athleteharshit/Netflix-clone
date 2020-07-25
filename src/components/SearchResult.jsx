import React from 'react';

const SearchResult = (props) => {
    console.log(props.name)
    const image = `https://source.unsplash.com/collection/${props.name}/600x400`
    return (
        <>
        <img src={image} alt="img"/>
        </>
    );
}

export default SearchResult;