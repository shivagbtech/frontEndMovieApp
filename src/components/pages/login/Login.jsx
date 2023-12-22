/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { loginUser } from "../../../utils/api/auth/loginUser";
import { AuthContext } from "../../../context/authContext";

import { NavLink, useNavigate } from "react-router-dom";

import "./login.css";
import { BgImg, LoginImg } from "../../../../public/assets";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const authContext = useContext(AuthContext);
  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleUserLoginClick = async (event) => {
    event.preventDefault();
    // console.log(user);
    const result = await loginUser(user);

    if (result.token !== null && result.token !== undefined) {
      console.log(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("isadmin", result.isadmin);
      localStorage.setItem("isLogin", "true");
      // authContext.userLogin(result)
      // console.log(authContext.isLogin);

      props.userLoginnedNow();
    }
  };

  return (
    <div className="main-div-login">
      {/* <div className="left-side-login">
        <img alt="image" src={LoginImg} ></img>
        
      </div>  */}
      <div className="right-side-login">
        <div className="main-login-page">
          <form onSubmit={handleUserLoginClick}>
            <h1>Login Page</h1>

            <input
              onChange={handleCredentialsChange}
              id="email"
              name="email"
              placeholder="enter your email"
              type="email"
              required
            />

            <input
              onChange={handleCredentialsChange}
              id="password"
              name="password"
              placeholder="enter your password"
              type="password"
              required
            />

            <button type="submit">Login</button>
          </form>
          {/* <button onClick={props.change}>
            new User?<a className="signup-btn">Sign Up</a>
          </button> */}
          <NavLink onClick={props.change} style={{color:'black'}}>
            Not yet registered? Register Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
