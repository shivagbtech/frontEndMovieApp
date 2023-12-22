import React, { useCallback, useEffect, useState } from "react";

import { getMovieApi } from "../../utils/api/movies/getMovieApi";
import { useLocation, useNavigate } from "react-router-dom";

import "./movieDetails.css";
import { Star } from "../../../public/assets";

export const MovieDetails = () => {
  //   const [movie, setMovie] = useState({});
  const [ratingState,setRating]=useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isadmin = localStorage.getItem("isadmin") === "true" ? true : false;
  const { state } = location;
  const { movie } = state;

  
  //   const getMovieDetails = useCallback(async () => {
  //     let result = await getMovieApi(state.movieId);

  //     setMovie({ ...result });
  //   }, [state.movie]);

  const handleEditMovieClick = () => {
    const path = `/update-movie`;
    navigate(path, { state: { movie: movie } });
  };

  useEffect(()=>{
    let staring=''
    for(let i=0;i<Number(movie.rating);i++){
      staring+='* ';
    }
    for(let i=Number(5)-(Number(movie.rating));i>0 ;i--){
      staring+='_ ';
    }
    setRating(staring);
  },[])

  //   useEffect(() => {
  //     getMovieDetails();
  //   }, [getMovieDetails]);

  return (
    <>
      {movie && (
        // <div className="movie-details-card">
        //   <div>
        //     <img
        //       src={movie.thumbnail}
        //       alt="thumbnail"
        //       width={"300px"}
        //       height={"500px"}
        //     />
        //     <p>Rating : {movie.rating} </p>
        //     {isadmin && (
        //       <button onClick={handleEditMovieClick} className="movie-edit-btn">
        //         Edit
        //       </button>
        //     )}
        //   </div>

        //   <p
        //     style={{ marginLeft: "5px", display: "flex", alignItems: "center" }}
        //   >
        //     <div>
        //       <div style={{ display: "flex", alignItems: "center" }}>
        //         <div style={{ display: "flex", flexDirection: "column" }}>
        //           <h3>title : </h3>
        //           <p>{movie.title}</p>
        //         </div>
        //       </div>
        //       <div style={{ display: "flex", flexDirection: "column" }}>
        //         <h3>category :</h3> {movie.category}
        //       </div>
        //       <div style={{ display: "flex", flexDirection: "column" }}>
        //         <h3>description :</h3> {movie.description}
        //       </div>
        //     </div>
        //   </p>
        // </div>
        // <div className="main-div">
        //   <div className="title-heading">
        //     <h2 style={{ display: "inline" }}>{movie.title}</h2>
        //   </div>
        //   <div className="img-div">
        //     <img src={movie.thumbnail} alt="thumbnail" />
        //   </div>

        //   {isadmin && (
        //     <div className="edit-btn">
        //       <button onClick={handleEditMovieClick} className="movie-edit-btn">
        //         Edit
        //       </button>
        //     </div>
        //   )}

        //   {/* <div style={{ textAlign: "center" }} id="rating-div-details"> */}
        //   <div className="rating-div">

        //     {/* <b>Rating :</b>
        //     {movie.rating} */}
        //     {ratingState}
        //   </div>
        //     {/* <input type="radio" id='rating_input' name='rating_input' value={movie.rating} />
        //     <label htmlFor='rating_input' title='rating_input' ></label>
        //   </div> */}
        //   <div className="description-div">
        //     <p>{movie.description}</p>
        //   </div>
        //   <div className="trailer">
        //     <iframe
        //       src={movie.trailer}

        //      width={'auto'}
        //      height={'auto'}
        //       title={movie.title}
        //     ></iframe>
        //   </div>
        // </div>
        <div >
          <div className="img-div">
            <img
              className="img-div-details"
              src={movie.thumbnail}
              alt="thumbnail"
            ></img>
            <div className="img-div-all">
              <div className="title">{movie.title}</div>
              <div className="details">
                <b>2023 - U/A 13+</b>
              </div>
              <div className="language">Hindi</div>
              <div className="category">{movie.category}</div>
              {/* <p className="title-paragraph">  */}

              {/* </p> */}
              {/* <div className="watch-videos">
                <button style={{backgroundColor:'white',color:'black',width:'100px',height:'30px',}}>Watch This</button>

              </div> */}
            </div>
          </div>
          {/* <div style={{padding:'20px',color:'black'}}>
            {movie.description}
          </div> */}
          <h1 style={{color:'black',
          paddingTop:'10px',
          paddingLeft:'50px',backgroundColor:'red'}}>Trailer</h1>
          <div className="video">
            <iframe className="videos"  src={movie.trailer}
            allowFullScreen></iframe>
          </div>
          {/* <div className="movie-detail">
            <h1 className="movie-details-div">{movie.title}</h1>
          </div> */}
        </div>
      )}
    </>
  );
};
