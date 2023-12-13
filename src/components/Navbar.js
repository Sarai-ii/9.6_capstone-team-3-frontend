import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/HELogo.png';
import LoginModal from './LoginModal'; // Import the LoginModal component
import '../css/Navbar.css';

function Logo() {
  return <img src={logo} alt="ToFromLogo"/>  
}

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className='navbar-middle-links-container'>
        <Link to="/" className="navbar-logo">
          <Logo />  
        </Link>
        <div className='navbar-middle-links'>
          <Link to="/events" id="events-middle-link" className="navbar-middle-link">events</Link>
          <Link to="/how-it-works" className="navbar-middle-link">how it works</Link>
          <Link to="/about" className="navbar-middle-link">about</Link>
        </div>
      </div>
      <div className="navbar-links">
        {/* Replace the Login link with a button that opens the LoginModal */}
        <button className="navbar-login-link" onClick={openModal}>
          Login 
        </button>
        <Link className="homepage-signup-link" to="/signup">
          Sign Up
        </Link> 
      </div>

      {/* Render the modal if it's open */}
      {isModalOpen && <LoginModal openModal={closeModal} />}
    </nav>
  );
}

export default NavBar;
