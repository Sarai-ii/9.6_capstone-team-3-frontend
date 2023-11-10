import React from 'react';

import '../css/homepage.css'


function Home() {
  return (
    <div className="homepage-header">
      <div className='h1-container'>
        <h1 className='to-title'>To:</h1> 
        <h1 className='from-title'>From:</h1>
      </div>
      <h2 className='slogan'>Bringing People Together Through Thoughtful Gestures</h2>
      <h3 className='slogan-2'>Join the Exchange of Happiness</h3>
    </div>
  );
}

export default Home;
