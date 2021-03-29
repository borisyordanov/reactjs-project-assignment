import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    // <nav classNameName="navbar">
    //   <Link to="/">
    //     <img
    //       className="nav-logo"
    //       src="http://cdn.onlinewebfonts.com/svg/img_415179.png"
    //       alt="Cookbook"
    //     />
    //   </Link>
    //   <div className="nav">
    //     <Link to="/login">
    //       <div className="nav-option">
    //         <span className="nav-optionLineOne">Hello Guest</span>
    //         <span className="nav-optionLineTwo">Login</span>
    //       </div>
    //     </Link>
    //     <Link to="/register">
    //       <div className="nav-option">
    //         <span className="nav-optionLineTwo">Register</span>
    //       </div>
    //     </Link>
    //   </div>
    // </nav>

    // <div className="header">
    //   <Link to="/" className="header-link">
    //     The Cook Book
    //   </Link>
    //   <div className="header-right">
    //     <Link className="active" to="/">
    //       Home
    //     </Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>
    //   </div>
    // </div>

    <div className="topnav">
      <NavLink to="/">
        <img
          className="logo"
          src="http://cdn.onlinewebfonts.com/svg/img_415179.png"
          alt="Cookbook"
        />
      </NavLink>
      <div className="links-nav">
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        <NavLink className="link" to="register">
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
