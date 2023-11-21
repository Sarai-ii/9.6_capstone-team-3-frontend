//DEPENDENCIES
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

// COMPONENTS

// STYLING
import "../css/UserProfile.css"
// API
const API = process.env.REACT_APP_API_URL;


export default function Profile({user}) {
  // This is the Profile Index(layout for every user keep general, nothing hardcoded)
// Import users from Users.js no need to fetch

  return (
    
    <div className='profile-container'>
      <h1>User Profile</h1>
      <section className='bio-container'>
        <div className='pfp-container'>
          <img className='pfp' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png" alt ="a person"/>
        </div>
          <h2 className='username'>USERNAME</h2>
        <img className="insta logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
        <img className="fb logo" src='https://pngimg.com/uploads/facebook_logos/small/facebook_logos_PNG19757.png'/>
        <img className="twitter logo" src="https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000"/>
      </section>

      <main className='posts-container'>
        {/* <h2>{pictures}</h2> */}
        <h2 className='username'>{user.username}</h2>
        {/* {user.posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))} */}
        <h2>FillerText</h2>
        <h2>FillerText</h2>
        <h2>FillerText</h2>
        <h2>FillerText</h2>
        <h2>FillerText</h2>
        <h2>FillerText</h2>
        <h2>FillerText</h2>
      </main>
    </div>
  )


}

