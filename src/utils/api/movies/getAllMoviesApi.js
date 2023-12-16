

import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const getAllMoviesApi=async ()=>{

    try{


        const headers = {
          Authorization: localStorage.getItem("token"),
        };
        const url=baseUrl+'/movies/get-movies'
        let result=await axios.get(url,{headers})
        return result;
    }catch(error){
        console.log(error)
        return [];
    }
    
}