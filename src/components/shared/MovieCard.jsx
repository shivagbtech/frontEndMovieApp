import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { deleteMovieApi } from "../../utils/api/movies/deleteMovieApi";
import { Link, useNavigate } from "react-router-dom";
// import { Card } from "react-bootstrap";

import "./movieCard.css";
import { Star } from "../../../public/assets";

const MovieCard = (props) => {
  // console.log('i am single movie');

  const [ratingState, setRating] = useState("");
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
    navigate(path, { state: { movie: props.movie } });
    // navigate(path, { state: {movieId:props.movie._id} });
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
  useEffect(() => {
    let staring = "";
    for (let i = 0; i < Number(props.movie.rating); i++) {
      staring += "* ";
    }
    for (let i = Number(5) - Number(props.movie.rating); i > 0; i--) {
      staring += "_ ";
    }
    setRating(staring);
  }, []);
  return (
    <div className="parent-movie-div">
      <div
        className="main-movie-card"
        onClick={() => handleMovieClick()}
        style={{ marginTop: "15px" }}
      >
        <img className="img-card" src={props.movie.thumbnail} alt="thumbnail">
          {/* {props.movie.title} */}
        </img>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="title-headings">
            {props.movie.title.slice(0, 17)}
            {props.movie.title.length > 17 ? "..." : ""}
          </h3>
          <p className="rating-paragraph">
            {/* Rating: {props.movie.rating} */}
            {/* {ratingState} */}
            {/* <meter min={0} max={5} value={props.movie.rating}></meter> */}
            <img src={Star}></img>
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="category-paragraph">{props.movie.category}</p>
          <p style={{marginRight:'14px'}}> {props.movie.rating}</p>
        </div>

        {/* <p className="description-paragraph">
          {props.movie.description.slice(0, 34)}
          {props.movie.description.length > 34 ? "..." : ""}
        </p> */}
        {/* {isadmin && (
          <div className="delete-div-btn">
            <button
              onClick={handleDeleteMovieClick}
              className="delete-movie-btn"
            >
              Delete
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MovieCard;
