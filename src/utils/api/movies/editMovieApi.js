import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const editMovieApi = async (movie) => {
  try {
    const url = baseUrl + "/movies/update-movie/" + `${movie._id}`;
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
// console.log(headers);
    let result = await axios.put(url, movie,{headers});

    return result;
  } catch (error) {
    console.log(error);
    alert('something went wrong')
  }
};
