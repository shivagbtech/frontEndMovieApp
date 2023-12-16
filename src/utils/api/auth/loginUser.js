import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const loginUser = async (user) => {
  const url = baseUrl + "/user/login";

  try {
    const result = await axios.post(url, user);

    return result.data;
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data);
    return null;
  }
};
