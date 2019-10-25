import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <NavLink
      to="/"
      exact
      className="navbar"
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/movies"
      exact
      activeStyle={{
        background: 'darkblue'
      }}
    >Movies</NavLink>
    <NavLink
      to="/directors"
      exact
      activeStyle={{
        background: 'darkblue'
      }}
    >Directors</NavLink>
        <NavLink
      to="/actors"
      exact
      activeStyle={{
        background: 'darkblue'
      }}
    >Actors</NavLink>
    </div>
  );
};

export default NavBar;
