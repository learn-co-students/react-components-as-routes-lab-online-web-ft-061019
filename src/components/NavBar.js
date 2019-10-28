/*
  NavBar
    20) wraps content in a div with .navbar class
    navlinks
      21) renders a Home <NavLink>
      22) renders a Movies <NavLink>
      23) renders an Actors <NavLink>
      24) renders a Directors <NavLink>
  */


import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
     <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
     </nav>
    </div>
  );
};

export default NavBar;