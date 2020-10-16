import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div data-testid="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
