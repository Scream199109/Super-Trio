import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
    <div className="nav-wrapper">
    <Link to="/" classNameName="brand-logo">Three-"O"</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
