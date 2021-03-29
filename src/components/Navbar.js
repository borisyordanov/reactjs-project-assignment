import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">CookUni</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/">
            Welcome, user!
          </Link>
          <Link className="nav-link" to="/create">
            Share recipe
          </Link>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
