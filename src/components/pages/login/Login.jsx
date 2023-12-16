/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { loginUser } from "../../../utils/api/auth/loginUser";
import { AuthContext } from "../../../context/authContext";
import { NavLink } from "react-bootstrap";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const authContext=useContext(AuthContext)
  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;

    

    setUser({ ...user, [name]: value });
  };

  const handleUserLoginClick = async(event) => {
    event.preventDefault()
    // console.log(user);
    const result=await loginUser(user)

    if(result.token!==null && result.token!==undefined){

      console.log(result.token);
      localStorage.setItem('token',result.token);
      localStorage.setItem('isadmin',result.isadmin)
      localStorage.setItem('isLogin','true');
      // authContext.userLogin(result)
      // console.log(authContext.isLogin);
      props.userLoginnedNow();
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleUserLoginClick}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleCredentialsChange}
            id="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleCredentialsChange}
            id="password"
            name="password"
            placeholder="create password"
            type="password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <button onClick={props.change}>
        new User?<NavLink>Sign Up</NavLink>
      </button>
    </div>
  );
};

export default Login;
