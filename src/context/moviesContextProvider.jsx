import {  useEffect, useState } from "react"
import { MovieContext } from "./movie-context"


export const CartProvider=(props)=>{

    
    const [movies,setMovies]=useState([]);

    

    // const deleteMovie=(_id)=>{

    // }
    // const updateMovie=(_id)=>{}
    // const addMovie=(movie)=>{}

    
    // value = { movieContext };

    return<MovieContext.Provider >

        {props.children}
    </MovieContext.Provider>
}

