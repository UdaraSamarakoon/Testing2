/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">
      Smart Banking
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Account List
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Create Account
          </Link>
        </li>

      </ul>
    </div>
  </nav>);
  //git check

export default NavBar;
