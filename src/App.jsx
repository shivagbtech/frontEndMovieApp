import { useContext, useEffect, useState } from "react";

import { LoginScreen, SignUpScreen } from "./components/pages";
import { AuthContextProvider } from "./context/authContextProvider";
import { AuthContext } from "./context/authContext";
import NavigationBar from "./components/shared/header/NavigationBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AddMovie } from "./components/pages/dashboard/AddMovie";
import { MovieList } from "./components/shared/Movies/MovieList";
import { MovieDetails } from "./components/shared/MovieDetails";
import MovieUpdate from "./components/pages/MovieUpdate";

import './app.css'
import AdminPanel from "./components/pages/adminPanel/AdminPanel";

const App = () => {
  const authContext = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [loginScreen, setLoginScreen] = useState(true);

  const navigate = useNavigate();
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

  const userLoginnedNow = () => {
    setIsLogin(!isLogin);
    navigate("/movies");
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined
    ) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="app">
      <AuthContextProvider>
        {isLogin &&
        <div className="navbar-div">{<NavigationBar />}</div>}
        <div>
          {!isLogin && loginScreen && (
            <LoginScreen change={change} userLoginnedNow={userLoginnedNow} />
          )}
        </div>
        <div>
          {!isLogin && !loginScreen && <SignUpScreen change={change} />}
        </div>
        {/* {localStorage.getItem('isadmin')=='true'?true:false} */}
        <Routes>
          <Route exact path="/add-movie" element={<AddMovie />} />
          <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/movie-details" element={<MovieDetails />} />
          <Route exact path="/update-movie" element={<MovieUpdate />} />

          <Route exact path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
