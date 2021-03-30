import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';

function Navbar() {
  const [{ user, recipes }] = useStateValue();

  const returnUserInfo = (user) => {
    if (user !== undefined) {
      return (
        <>
          <Link className="nav-link" to="/recipe/create">
            Share recipe
          </Link>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      );
    }
  };

  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">CookUni</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/">
            Welcome, {user ? `${user.email}` : 'Guest'}!
          </Link>
          {returnUserInfo(user)}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
