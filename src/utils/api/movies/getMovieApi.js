

import axios from "axios";
import { baseUrl } from "../backendApiUrl";

export const getMovieApi=async (movieId)=>{

    try{

        const headers = {
      Authorization: localStorage.getItem("token"),
    };
        const url=baseUrl+'/movies/get-movie/'+`${movieId}`
        let result =await axios.get(url,{headers})
        return result ;
    }catch(error){
        console.log(error)
        return null;
    }
    
}