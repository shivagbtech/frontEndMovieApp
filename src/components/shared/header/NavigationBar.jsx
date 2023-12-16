import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { MovieList } from '../Movies/MovieList';

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
    <Navbar
      sticky="top"
      bg="black"
      variant="dark"
      color="white"
      style={{ paddingLeft: "15px", marginLeft: "20px" }}
    >
      <Container className="mx-auto">
        <Nav style={{ paddingLeft: "15px", marginLeft: "20px" }}>
          {isadmin && (
            <NavLink to="/movies" style={{ marginRight: "20px" }}>
              Movies
            </NavLink>
          )}
          {isadmin && (
            <NavLink to="/dashboard" style={{ marginRight: "20px" }}>
              DashBoard
            </NavLink>
          )}
          {!isadmin && (
            <Navigate to="/movies"  />
          )}

          {/* {!isadmin && } */}

          <NavLink onClick={handleLogoutClick}>Logout</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
