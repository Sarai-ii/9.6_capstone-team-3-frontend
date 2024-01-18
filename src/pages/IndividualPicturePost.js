import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import heartIcon from '../images/heart.svg';
import thumbIcon from '../images/thumbs-up.svg';

import "../css/IndividualPicturePost.css";

function IndividualPicturePost() {
    const { id } = useParams();
    const [picturePost, setPicturePost] = useState(null);
  
    useEffect(() => {
      const fetchPicturePost = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/pictures/${id}`
          );
          setPicturePost(response.data);
        } catch (error) {
          console.error('Error fetching picture post:', error);
        }
      };
  
      fetchPicturePost();
    }, [id]);
  
    const handleLikeClick = async () => {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/pictures/${id}/like`);
        setPicturePost(response.data);
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    };
  
    if (!picturePost) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="individual-picture-post-container">
        <div className="individual-picture-post">
          <img
            className="individual-picture-post-img"
            src={picturePost.pictures_post_url}
            alt={picturePost.pictures_post_title}
          />
          <div className="individual-picture-post-details">
            <h3 className="individual-picture-card-h3">
              {picturePost.pictures_post_title}
            </h3>
            <p id="individual-card-text">{picturePost.pictures_post_blurb}</p>
            <div id="individual-likes-container">
              <span><img src={heartIcon} id="heartIcon" /> {picturePost.likes_count}</span>
              <div>
                <button id="like-button" onClick={handleLikeClick}></button>
                <img src={thumbIcon} id="thumbIcon" onClick={handleLikeClick} />
              </div>
            </div>
          </div>
        </div>
        <Link to="/gallery" className="back-to-gallery-link">
          Back to Gallery
        </Link>
      </div>
    );
  }
  
  export default IndividualPicturePost;