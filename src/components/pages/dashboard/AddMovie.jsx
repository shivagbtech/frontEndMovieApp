import React, { useState } from "react";
import { addMovieApi } from "../../../utils/api/movies/addMovieApi";

import "./dashboard.css";
import { useNavigate } from "react-router-dom";

export const AddMovie = (props) => {

  const navigate=useNavigate()
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    thumbnail: "",
    trailer: "",
    category: "",
  });

  const handleMovieCredentialChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
    // console.log(movie);
  };

  const handleAddMovieClick = (event) => {
    event.preventDefault();

    const addedMovie = addMovieApi(movie);
    console.log("addedMovie", addedMovie);

    if (addedMovie !== null) {
      alert("movie added successfully");
      navigate('/admin-panel')

    }
  };
  let isLogin = localStorage.getItem("isLogin") === "true" ? true : false;
  return (
    <>
      {isLogin && (
        <div className="main-dashboard">
          <h3>DashBoard</h3>
          <form onSubmit={handleAddMovieClick}>
            <div className="form-label" id="form-label">
              <label>Title</label>
              <br></br>
              <input
                type="text"
                id="title"
                name="title"
                // value={movie.title}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div className="form-label" id="form-label">
              <label>description</label>
              <br></br>
              <input
                type="text"
                id="description"
                name="description"
                // value={movie.description}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div className="form-label" id="form-label">
              <label>thumbnail</label>
              <br></br>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                // value={movie.thumbnail}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div className="form-label" id="form-label">
              <label>trailer</label>
              <br></br>
              <input
                type="text"
                id="trailer"
                name="trailer"
                // value={movie.trailer}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div className="form-label" id="form-label">
              <label>category</label>
              <br></br>
              <input
                type="text"
                id="category"
                name="category"
                // value={movie.category}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div className="form-label" id="form-label">
              <label>Rating</label>
              <br></br>
              <input
                type="number"
                max={5}
                min={1}
                id="rating"
                name="rating"
                // value={movie.category}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <button type="submit" className="add-movie-btn">
              Add Movie
            </button>
          </form>
        </div>
      )}
    </>
  );
};
