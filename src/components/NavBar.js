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
       <ul>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/movies">Movies</NavLink></li>
       <li><NavLink to="/actors">Actors</NavLink></li>
       <li><NavLink to="/directors">Directors</NavLink></li>
        </ul>
     </nav>
    </div>
  );
};

export default NavBar;