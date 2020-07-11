import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <li>
        <NavLink 
          to="/"
          exact
          // style={link}
          className="navbar"
          activeStyle={{
            background: 'lightBlue'
          }}
        >Home</NavLink>
      </li>
      <li>
        <NavLink 
          to="/movies"
          exact
          //style={link}
          activeStyle={{
            background: 'lightBlue'
          }}
        >Movies</NavLink>  
      </li>
      <li>
        <NavLink 
          to="/directors"
          exact
          //style={link}
          activeStyle={{
            background: 'lightBlue'
          }}
        >Directors</NavLink>  
      </li>
      <li>
        <NavLink 
          to="/actors"
          exact
          //style={link}
          activeStyle={{
            background: 'lightBlue'
          }}
        >Actors</NavLink> 
      </li>
    </div>
  );
};

export default NavBar;
