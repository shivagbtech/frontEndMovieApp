import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import {getAllMoviesApi} from "../../../utils/api/movies/getAllMoviesApi";
import { MovieCard } from "../MovieCard";

export const MovieList = () => {

    const [movies,setMovies]=useState([]);
  const [fetchMovieCall,setCall]=useState(false);
  useEffect(() => {
    const fetchingAllMovies = async () => {
      let movieList = await getAllMoviesApi();
      setMovies(movieList.data.result);
      console.log("movies", movieList.data.result);
    };
    fetchingAllMovies();
  }, [fetchMovieCall]);

  const handleFetch=()=>{
    setCall(!fetchMovieCall)
  }
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} handleFetch={handleFetch}  movie={movie} />;
      })}
    </div>
  );
};


