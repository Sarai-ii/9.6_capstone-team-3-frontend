import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="public/OrangeLogo.jpg" alt="ToFromLogo" />
      </Link>
      <div className="navbar-links">
        <Link className="navbar-login-link" to="/signup">
          Login
        </Link>
        <Link className="navbar-events-link" to="/events">
          Events
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
