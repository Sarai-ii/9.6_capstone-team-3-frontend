import React, { useState, useEffect } from 'react';
import axios from 'axios';


import '../css/fullGallery.css';

function FullGallery() {
  const [picturePosts, setPicturePosts] = useState([]);

  useEffect(() => {
    const fetchPicturePosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/pictures`);
        setPicturePosts(response.data);
      } catch (error) {
        console.error('Error fetching picture posts:', error);
      }
    };

    fetchPicturePosts();
  }, []);

  return (
    <div className='picture-card-container'>
        <div className='picture-card-h1-container'>
      <h1 className='picture-card-h1'>Current Gifts!!</h1>
        </div>
      {picturePosts.map((picturePost) => (
        <div key={picturePost.id} className="picture-card">
          <img className="picture-card-img" src={picturePost.pictures_post_url} alt={picturePost.pictures_post_title} />
          <h3 className='picture-card-h3'>{picturePost.pictures_post_title}</h3>
          <p>{picturePost.pictures_post_blurb}</p>
          <p>Likes: {picturePost.likes_count}</p>
        </div>
      ))}
    </div>
  );
}

export default FullGallery;
