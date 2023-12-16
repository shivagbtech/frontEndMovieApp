import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const deleteMovieApi = async (id) => {
  try {
    // let url = baseUrl + "/remove-movie/" + `${id}`;
    let url=`${baseUrl}/movies/remove-movie/${id}`

    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    await axios.delete(url, { headers });

    return true;
  } catch (error) {

    console.log(error);
  }
};
