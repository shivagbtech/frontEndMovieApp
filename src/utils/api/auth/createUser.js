import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const createUser = (user) => {
  const url = baseUrl + "/user/createuser";

  axios
    .post(url, user)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
};
