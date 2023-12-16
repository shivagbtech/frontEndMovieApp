import { useContext, useEffect, useState } from "react";

import { LoginScreen, SignUpScreen } from "./components/pages";
import { AuthContextProvider } from "./context/authContextProvider";
import { AuthContext } from "./context/authContext";
import NavigationBar from "./components/shared/header/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/pages/dashboard/dashboard";
import { MovieList } from "./components/shared/Movies/MovieList";
import { MovieDetails } from "./components/shared/MovieDetails";
import MovieUpdate from "./components/pages/MovieUpdate";


const App = () => {
  const authContext = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [loginScreen, setLoginScreen] = useState(true);

  const change = () => {
    setLoginScreen(!loginScreen);
  };

  // // console.log('app rendering');
  // const userLoginnedNow=()=>{
  //   console.log('userloginned');
  //   console.log(authContext.isLoggedIn);
  //   // setIsLogin(true)
  //   console.log(authContext);
  // }

  // useEffect(()=>{

  //   console.log("From the context_API", authContext);
  // },[authContext.isLoggedIn])

  const userLoginnedNow=()=>{
    setIsLogin(!isLogin)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined){
      setIsLogin(true)
    }
  },[])
  return (
    <AuthContextProvider>
      <div>{isLogin && <NavigationBar />}</div>
      <div>
        {!isLogin && loginScreen && (
          <LoginScreen change={change} userLoginnedNow={userLoginnedNow} />
        )}
      </div>
      <div>{!isLogin && !loginScreen && <SignUpScreen change={change} />}</div>

      {/* {localStorage.getItem('isadmin')=='true'?true:false} */}
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/movies" element={<MovieList />} />
        <Route exact path="/movie-details" element={<MovieDetails />} />
        <Route exact path="/update-movie" element={ <MovieUpdate />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
