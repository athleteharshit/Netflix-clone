import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");


  // A snippet of code which runs based on  a spicfic condition/varibals

  useEffect(() => {
    // if [], runs once when the row loads , don't run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {

      autoplay: 1,
    },
  };

  const handeleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("");
    }else {
      movieTrailer(movie?.name || "")
      .then((url) => {
        const urlParamas = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParamas.get("v"));
      }).catch(error => console.log(error));
    }
  }
  // console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {/* {several row_poster} */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handeleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
