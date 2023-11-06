import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/ToFromLogo.png" alt="ToFromLogo" />
      </div>
      <div className='navbar-links'>
        <Link className='navbar-login-link' to="/signup">Login</Link>
        <Link className='navbar-events-link' to="/events">Events</Link> 
      </div>
    </nav>
  );
}

export default NavBar;
