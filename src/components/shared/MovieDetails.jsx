import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getMovieApi } from "../../utils/api/movies/getMovieApi";
import { useLocation, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
//   const [movie, setMovie] = useState({});
const navigate=useNavigate()
  const location = useLocation();
  const isadmin = localStorage.getItem("isadmin") === "true" ? true : false;
  const { state } = location;
  const { movie } = state;

  //   const getMovieDetails = useCallback(async () => {
  //     let result = await getMovieApi(state.movieId);

  //     setMovie({ ...result });
  //   }, [state.movie]);

  const handleEditMovieClick = () => {
    const path = `/update-movie`;
    navigate(path, { state: { movie: movie } });
  };

  //   useEffect(() => {
  //     getMovieDetails();
  //   }, [getMovieDetails]);

  return (
    <>
      {movie && (
        <div>
          <h3>title : {movie.title}</h3>

          <p>description :{movie.description}</p>
          <p>Rating : {movie.rating}</p>

          {isadmin && <Button onClick={handleEditMovieClick}>Edit</Button>}
        </div>
      )}
    </>
  );
};
