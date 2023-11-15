import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Full Gallery</h1>
      {picturePosts.map((picturePost) => (
        <div key={picturePost.id} className="picture-card">
          <img src={picturePost.pictures_post_URL} alt={picturePost.pictures_post_title} />
          <h3>{picturePost.pictures_post_title}</h3>
          <p>{picturePost.pictures_post_blurb}</p>
          <p>Likes: {picturePost.likes_count}</p>
        </div>
      ))}
    </div>
  );
}

export default FullGallery;
