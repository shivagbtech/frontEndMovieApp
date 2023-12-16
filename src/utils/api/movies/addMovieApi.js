import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const addMovieApi = (movie) => {
  try {
    const url = baseUrl + "/movies/add-movie";

    // const token = localStorage.getItem("token");

    const headers = {
      Authorization: localStorage.getItem("token"),
    };

    const isadmin = localStorage.getItem("isadmin");

    console.log("movie", movie);
    
    if (isadmin === "true") {
      axios
        .post(
          url,

          movie,
          { headers }
        )
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error.response.data);
          return null;
        });
    }
  } catch (error) {
    console.log(error);
  }
};

//{ headers: { Authorization: `Bearer ${token}` } },
