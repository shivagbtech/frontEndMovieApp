/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createUser } from "../../../utils/api/auth/createUser";
import { NavLink } from "react-bootstrap";

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

  const handleUserSignUpClick = (event) => {
    event.preventDefault();
    // console.log("State Values", user);
    const result=createUser(user)
    // if(result){
      alert('user created successfully,now please login')
    // }else{
    //   alert('something went wrong')
    // }

  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleUserSignUpClick}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            onChange={handleCredentialsChange}
            id="username"
            name="username"
            // value={user.name}
            placeholder="enter your name"
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleCredentialsChange}
            id="email"
            name="email"
            // value={user.email}
            placeholder="enter your email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            // value={user.password}
            onChange={handleCredentialsChange}
            id="password"
            name="password"
            placeholder="create password"
            type="password"
            required
          />
        </div>
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
      <button onClick={props.change}>
        existing User?<NavLink>Login</NavLink>
      </button>
    </div>
  );
};

export default SignUp;
