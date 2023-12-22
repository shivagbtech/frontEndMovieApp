import React, { useState } from "react";
import { editMovieApi } from "../../utils/api/movies/editMovieApi";
import { useLocation, useNavigate } from "react-router-dom";

import "./movieUpdate.css";

const MovieUpdate = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { state } = location;
  const { movie } = state;
  const [movies, setMovie] = useState({
    title: movie.title,
    description: movie.description,
    rating: movie.rating,
    thumbnail: movie.thumbnail,
    trailer: movie.trailer,
    category: movie.category,
  });

  const handleMovieCredentialChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    console.log(name, "= name = value = ", value);
    setMovie({ ...movies, [name]: value });
    console.log(movies);
  };

  const handleEditMovieClick = async (event) => {
    event.preventDefault();

    const edittedMovie = await editMovieApi({ ...movies, _id: movie._id });
    console.log("edittedMovie", edittedMovie);
    alert("updated successfully");
    navigate("/admin-panel");
  };
  return (
    <div className="main-movie-update">
      <form onSubmit={handleEditMovieClick}>
        <h3>updating Movie...</h3>
        <div>
          <label>Title</label>
          <br></br>
          <input
            type="text"
            id="title"
            name="title"
            value={movies.title}
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
            value={movies.description}
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
            value={movies.thumbnail}
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
            value={movies.trailer}
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
            value={movies.category}
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
            value={movies.rating}
            onChange={handleMovieCredentialChange}
            required
          />
        </div>
        <button className="edit-movie-btn" type="submit">
          Edit Movie
        </button>
      </form>
    </div>
  );
};

export default MovieUpdate;
