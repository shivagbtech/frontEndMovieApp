import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const getAllUserApi = async () => {
  try {
    const url = baseUrl + "/user/get-all-user";

    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    const isadmin = localStorage.getItem("isadmin");


    if (isadmin === "true") {
      const resul = await axios
        .get(url, { headers })
        .then((result) => {
            console.log("alluser", result.data.allUser);
          return result.data.allUser;
        })
        .catch((error) => {
          console.log(error.response.data);
          return null;
        });
      return resul;
    }
  } catch (error) {
    console.log(error);
  }
};
