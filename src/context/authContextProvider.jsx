import React, { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthContextProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");

  const userLogin = (loginResponse) => {
    localStorage.setItem("token", loginResponse.token);
    setIsAdmin(loginResponse.isadmin);
    setIsLogin(true);
    setToken(loginResponse.token);
    // console.log(isLogin);
    // console.log("loginned", authContext.isLoggedIn);
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLogin(false);
    setIsAdmin(false);
  };
  let authContext = {
    token: token,
    isadmin: isAdmin,
    isLoggedIn: isLogin,
    userLogin: userLogin,
    userLogout: userLogout,
  };

//   console.log("information insiide the auth context", authContext);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
