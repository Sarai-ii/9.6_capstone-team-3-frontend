import React from 'react';
import { Link } from 'react-router-dom';


import registrationImage from '../images/registration-image.png'
import matchingImage from '../images/matching-image.png'
import sendingGiftImage from '../images/send-a-gift-image.png'
import receiveGiftImage from '../images/receiving-gift-image.png'

import '../css/homepage.css';

function Home() {
  return (
    <div className="homepage-container">
      <div className='title-slogan-container'>
      <div className="h1-container">
        <h1 className="to-title">To:</h1>
        <h1 className="from-title">From:</h1>
      </div>
      <h2 className="slogan">
        Bringing People Together Through Thoughtful Gestures
      </h2>
      <h3 className="slogan-2">Join the Exchange of Happiness</h3>
      </div>

      <div className="signup-container">
        <section className="signup">
          <h2 className='signup-h2-title'>Sign Up Today!</h2>
          <p className='signup-text'>
            Join our community and spread happiness. Sign up now to start
            exchanging thoughtful gifts.
          </p>
          <div className='homepage-link-container'>
            <Link className="homepage-signup-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </section>
      </div>

      <h1 className='how-it-works-title'>How it Works</h1>

      <div className="how-it-works-container">
        <section className="how-it-works">
  

          <div className="step-container">
            <h2 className='step-container-title'>Register</h2>
            <img src={registrationImage} alt="Register" />
            <p>Register for an account to join our community.</p>
          </div>

          <div className="step-container">
          <h2 className='step-container-title'>Get Matched</h2>
            <img src={matchingImage} alt="Get Matched" />
            <p>Get matched with someone in our community.</p>
          </div>

          <div className="step-container">
          <h2 className='step-container-title'>Send a Gift</h2>
            <img src={sendingGiftImage} alt="Send a Gift" />
            <p>Send a thoughtful gift to your match.</p>
          </div>

          <div className="step-container">
          <h2 className='step-container-title'>Receive a Gift</h2>
            <img src={receiveGiftImage} alt="Receive a Gift" />
            <p>Receive a thoughtful gift from your match.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
