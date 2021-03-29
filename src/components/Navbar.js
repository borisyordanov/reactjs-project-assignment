import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_415179.png"
            alt="The Cook Book"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
