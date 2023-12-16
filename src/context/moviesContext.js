import React from 'react'

export const MovieContext=React.createContext({

    movies:[],
    deleteMovie:(_id)=>{},
    updateMovie:(_id)=>{},
    addMovie:(movie)=>{}
})

