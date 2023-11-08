import React from 'react';

import '../css/homepage.css'


function Home() {
  return (
    <div className="homepage-header">
      <div className='h1-container'>
        <h1 className='to-title'>To:</h1> 
        <h1 className='from-title'>From:</h1>
      </div>
      <h2 className='slogan'>Your Slogan Goes Here</h2>
    </div>
  );
}

export default Home;
