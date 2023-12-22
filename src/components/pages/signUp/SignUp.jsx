/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createUser } from "../../../utils/api/auth/createUser";
// import { NavLink } from "react-bootstrap";
import './signUp.css'
import { NavLink } from "react-router-dom";
const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isadmin: false,
  });

  const handleCredentialsChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    if (name === "username") setUser({ ...user, name: value });
    if (name === "email") setUser({ ...user, email: value });
    if (name === "password") setUser({ ...user, password: value });
    if (name === "isadmin"){
      console.log(value,name);
      setUser({ ...user, isadmin: value === "admin" ? true : false });
    }
  };

  const handleUserSignUpClick = async (event) => {
    event.preventDefault();
    
    const result=await createUser(user)
    if(result==true){
      alert('user created successfully,now please login')
    }else{
   
      alert(result)
    }

  };

  return (
    <div className="main-div-signup">
      <div className="main-signup">
        <form onSubmit={handleUserSignUpClick}>
          <h1>Create Your account</h1>

          <input
            onChange={handleCredentialsChange}
            id="username"
            name="username"
            // value={user.name}
            placeholder="enter your name"
            type="text"
            required
          />

          <input
            onChange={handleCredentialsChange}
            id="email"
            name="email"
            // value={user.email}
            placeholder="enter your email"
            type="email"
            required
          />

          <input
            // value={user.password}
            onChange={handleCredentialsChange}
            id="password"
            name="password"
            placeholder="create password"
            type="password"
            required
          />

          <div>
            <select
              defaultValue={"user"}
              id="isadmin"
              name="isadmin"
              onChange={handleCredentialsChange}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        {/* <button onClick={props.change}>
        existing User?<a  className="login-btn">Login</a>
      </button> */}

        <NavLink onClick={props.change} style={{ color: "black" }}>
          Already registered? Login
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
