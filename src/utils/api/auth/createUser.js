import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const createUser =async (user) => {
  const url = baseUrl + "/user/createuser";

  const resul=await axios
    .post(url, user)
    .then((result) => {
      return true;
    })
    .catch((error) => {
      // console.log(error.response.data);
      return error.response.data.message;
    });
    return resul;
};
