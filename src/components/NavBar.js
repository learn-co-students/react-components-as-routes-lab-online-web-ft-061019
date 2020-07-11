import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
<nav className="navbar">
    <div className='container'>
      <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
    </div>

     </nav>
    </div>
  );
};

export default NavBar;
