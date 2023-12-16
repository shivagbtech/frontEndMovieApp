import { red } from "@mui/material/colors";
import React from "react";
import { deleteMovieApi } from "../../utils/api/movies/deleteMovieApi";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

export const MovieCard = (props) => {
  // console.log('i am single movie');
  const navigate = useNavigate();
  const isadmin = localStorage.getItem("isadmin") === "true" ? true : false;

  const handleDeleteMovieClick = async () => {
    let result = await deleteMovieApi(props.movie._id);
    if (result) {
      alert("successsfully deleted");
      props.handleFetch();
    }
  };

  const handleMovieClick = () => {
    const path = `/movie-details`;
    navigate(path, { state: {movie:props.movie} });
    // this.props.history.push({
    //   pathname: "/movie-details",
    //   state: props, // your data array of objects
    // });
    // <Link
    //   to={{
    //     pathname: "/movie-details",
    //     state: props, // your data array of objects
    //   }}
    // ></Link>;
  };
  return (
    <>
      <Card
        onClick={() => handleMovieClick()}
        style={{ marginLeft: "15px", marginTop: "15px" }}
      >
        <h3>title : {props.movie.title}</h3>

        <p>description :{props.movie.description}</p>
        <p>Rating : {props.movie.rating}</p>
        {isadmin && <button onClick={handleDeleteMovieClick}>Delete</button>}
      </Card>
    </>
  );
};
