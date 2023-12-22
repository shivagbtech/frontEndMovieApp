import React, { useEffect, useState } from "react";
import { getAllMoviesApi } from "../../../utils/api/movies/getAllMoviesApi";

import "./movieAdmin.css";
import { useNavigate } from "react-router-dom";
import { deleteMovieApi } from "../../../utils/api/movies/deleteMovieApi";
import { getAllUserApi } from "../../../utils/api/auth/getAllUser";

const MovieAdmin = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [fetchMovieCall, setCall] = useState(false);

  const [userLists, setUser] = useState([]);
  const handleAddMovieClick = () => {
    navigate("/add-movie");
  };

  const handleEditBtn = (movie) => {
    navigate("/update-movie", { state: { movie: movie } });
  };

  const handleDeleteBtn = async (movie) => {
    let result = await deleteMovieApi(movie._id);
    if (result) {
      alert("successsfully deleted");
      setCall(!fetchMovieCall);
    }
  };

  useEffect(() => {
    const fetchingAllMovies = async () => {
      let movieList = await getAllMoviesApi();
      let userList = await getAllUserApi();
      setUser(userList);
      setMovies(movieList.data.result);
    };
    fetchingAllMovies();
  }, [fetchMovieCall]);

  console.log("movies_movies", movies);

  return (
    <div className="movie-admin-main-div">
      <div className="admin-add-movies">
        <button className="add-movie-button" onClick={handleAddMovieClick}>
          {" "}
          Add Movie
        </button>
      </div>
      <div style={{ margin: "auto" }}>
        <table border={1}>
          <tr>
            <th
              style={{
                fontSize: "30px",
                // paddingRight: "20px",
                marginRight: "20px",
              }}
              className="color-change"
            >
              Title
            </th>
            <th
              style={{
                fontSize: "30px",
                paddingRight: "20px",
                marginRight: "10px",
              }}
              className="color-change"
            >
              Category
            </th>
            <th
              style={{
                fontSize: "30px",
                paddingRight: "20px",
                marginRight: "20px",
              }}
              className="color-change"
            >
              Rating
            </th>
          </tr>
          {movies ? (
            movies.map((movie, index) => {
              const {
                category,
                description,
                rating,
                thumbnail,
                title,
                trailer,
              } = movie;
              return (
                <tr key={movie._id} className="color-change">
                  <td className="color-change" style={{ textAlign: "center" }}>
                    {movie.title}
                  </td>
                  <td
                    className="color-change"
                    style={{ textAlign: "center", marginRight: "20px" }}
                  >
                    {movie.category}
                  </td>
                  <td className="color-change" style={{ textAlign: "center" }}>
                    {movie.rating}
                  </td>
                  <td>
                    <button
                      className="color-change btn"
                      onClick={() => handleEditBtn(movie)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="color-change btn"
                      onClick={() => handleDeleteBtn(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "black" }}>Active User List</h1>
      </div>
      <div className="user-list" style={{ textAlign: "center" }}>
        {userLists ? (
          userLists.map((user, index) => {
            console.log("user", user);
            return (
              <div
                key={index}
                className="color-change"
                style={{ width: "800px", margin: "auto" }}
              >
                {user.name} --- {user.email}
                <hr></hr>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MovieAdmin;
