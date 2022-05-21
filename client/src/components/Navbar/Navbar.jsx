import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const { user } = useSelector(store => store.user)
  return (
    <nav>
      <div className="nav-wrapper">
        {
          !user.email ?
            <>
              <Link to="/" className="brand-logo"><img className='icon' src="https://img.icons8.com/stickers/452/anonymous-mask.png" alt="" srcset="" /></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/reg">Registration</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </>
            :
            <>
              <Link to="/" className="brand-logo">Three-"O"</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">{user.email}</Link></li>
              </ul>
            </>
        }
      </div>
    </nav>
  );
}

export default Navbar;
