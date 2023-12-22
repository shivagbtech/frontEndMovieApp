import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { MovieList } from '../Movies/MovieList';

import './navigationBar.css'
import { Logo } from '../../../../public/assets';

const NavigationBar = (props) => {

  const handleLogoutClick=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('isadmin');
    localStorage.removeItem('isLogin');
    window.location.href='/'
  }

  const isadmin=localStorage.getItem('isadmin')==='true'?true:false;
  // const isLogin=localStorage.getItem('isLogin')=='true'?true:false;
  return (
    <nav style={{ paddingLeft: "15px" }} className="main-navigation-bar">
      <div className="home-dashboard-div">
        <img src={Logo} alt='logo' height='20px' style={{marginRight:'20px',marginLeft:'20px'}}></img>

        <p style={{display:'inline',marginRight:'60px'}}>Movie Application</p>
        {isadmin && (
          <NavLink
            id="movies"
            to="/movies"
            style={{marginRight: "20px", textDecoration: "none" }}
          >
            Movies
          </NavLink>
        )}
        {isadmin && (
          <NavLink
            id="dashboard"
            to="/admin-panel"
            style={{ marginRight: "20px", textDecoration: "none" }}
          >
            Admin-Panel
          </NavLink>
        )}
        {!isadmin && (
          <NavLink
            to="/movies"
            id="movies"
            style={{ marginRight: "20px", textDecoration: "none" }}
          >
            Movies
          </NavLink>
        )}
      </div>

      {/* {!isadmin && } */}
      <div className="logout-div">
        <NavLink onClick={handleLogoutClick} style={{textDecoration:'none'}}>Logout</NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
