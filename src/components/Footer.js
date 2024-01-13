// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer({user}) {
  return (
    <div className='pg-footer'>
      <footer className='footer'>
        <svg className='footer-wave-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>  
          <div className='footer-content'>
          <div className="footer-content-column">
            <div className='footer-menu'>
            <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item ">
                  <Link to="/about" >About Us</Link>
                </li>
                <li className="menu-item ">
                  <Link to="/faq">FAQ</Link></li>
                <li className="menu-item">
                  <Link to="/events">Events</Link>
                </li>
              </ul>
          </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
            <h2 className="footer-menu-name">Legal</h2>
            <ul id="menu-legal" className="footer-menu-list">
              <li className="menu-item menu-item-privacy-policy">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="menu-item">
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>

            </div>
          </div>
          <div className='footer-content-column'>
              <p></p>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              { !user ? (
                // if there is no one logged in, show sign up button
                <>
                <p className="footer-call-to-action-description"></p>
                <Link to="/signup" id="main-signup-link" className="button call-to-action-signup-link"> Sign Up for Free! </Link>
                </>
              ) : (
                // if someone is logged in, hide the button
                null
              )}
            </div>            
          </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer