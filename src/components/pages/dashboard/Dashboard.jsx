import React, { useState } from 'react';
import { addMovieApi } from '../../../utils/api/movies/addMovieApi';

export const Dashboard = (props) => {

  const [movie,setMovie]=useState({title:'',description:'',rating:'',thumbnail:'',trailer:'',category:''})

  const handleMovieCredentialChange=(event)=>{
    event.preventDefault();

    const {name,value}=event.target;
    setMovie({...movie,[name]:value})
  // console.log(movie);
  }

  const handleAddMovieClick= (event)=>{
    event.preventDefault();

    const addedMovie=addMovieApi(movie);
    console.log("addedMovie", addedMovie);

  }
  let isLogin=localStorage.getItem('isLogin')==='true'?true:false;
  return (
    <>
      {isLogin && (
        <div>
          <h3>DashBoard</h3>
          <form onSubmit={handleAddMovieClick}>
            <div>
              <label>Title</label>
              <br></br>
              <input
                type="text"
                id="title"
                name="title"
                // value={movie.title}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div>
              <label>description</label>
              <br></br>
              <input
                type="text"
                id="description"
                name="description"
                // value={movie.description}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div>
              <label>thumbnail</label>
              <br></br>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                // value={movie.thumbnail}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div>
              <label>trailer</label>
              <br></br>
              <input
                type="text"
                id="trailer"
                name="trailer"
                // value={movie.trailer}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div>
              <label>category</label>
              <br></br>
              <input
                type="text"
                id="category"
                name="category"
                // value={movie.category}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <div>
              <label>Rating</label>
              <br></br>
              <input
                type="number"
                max={5}
                min={1}
                id="rating"
                name="rating"
                // value={movie.category}
                onChange={handleMovieCredentialChange}
                required
              />
            </div>
            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}
    </>
  );
}


