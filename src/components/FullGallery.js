import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const handleCardClick = (index) => {
    const updatedPicturePosts = [...picturePosts];
    updatedPicturePosts[index].showText = !updatedPicturePosts[index].showText;
    setPicturePosts(updatedPicturePosts);
  };

  return (
    <div className='picture-card-container'>
      <div className='picture-card-h1-container'>
        <Link className='picture-card-link' to="/gallery">
          <h1  id="picture-card-h1-title" className='picture-card-h1'>Check Out Previous Exchanges</h1>
        </Link>
      </div>
      {picturePosts.map((picturePost, index) => (
        <div
          key={picturePost.id}
          className={`picture-card ${picturePost.showText ? 'show-text' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <img className="picture-card-img" src={picturePost.pictures_post_url} alt={picturePost.pictures_post_title} />
          <div className="picture-card-overlay">
            <h3 className='picture-card-h3'>{picturePost.pictures_post_title}</h3>
            <p>{picturePost.pictures_post_blurb}</p>
            <p>Likes: {picturePost.likes_count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FullGallery;
