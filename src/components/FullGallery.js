import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import heartIcon from '../images/heart.svg';
import thumbIcon from '../images/thumbs-up.svg';

import "../css/fullGallery.css";

function FullGallery({ previewMode }) {
  const [picturePosts, setPicturePosts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const fetchPicturePosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/pictures`
        );
        setPicturePosts(response.data.reverse());
      } catch (error) {
        console.error("Error fetching picture posts:", error);
      }
    };

    fetchPicturePosts();
  }, []);

  const handleCardClick = (index) => {
    // Add logic for handling card click here
    console.log(`Card at index ${index} clicked!`);
  };

  const handleLikeClick = async (id) => {
    try {
      // Make a PUT request to update likes
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/pictures/${id}/like`);
      const updatedPicturePosts = [...picturePosts];
      const updatedIndex = updatedPicturePosts.findIndex(post => post.id === id);
      if (updatedIndex !== -1) {
        updatedPicturePosts[updatedIndex] = response.data;
        setPicturePosts(updatedPicturePosts);
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 4);
  };

  const handleShowLess = () => {
    setVisibleCards(4);
  };

  return (
    <div className="picture-card-container">
      <div className="picture-card-h1-container">
        {previewMode ? (
          <h1 id="picture-card-h1-title" className="picture-card-h1">
            Preview of Previous Exchanges
          </h1>
        ) : (
          <Link className="picture-card-link" to="/gallery">
            <h1 id="picture-card-h1-title" className="picture-card-h1">
              Gift's Exchanged
            </h1>
          </Link>
        )}
      </div>
      <div className="cards-and-buttons-container">
        {picturePosts.length > 0 ? (
          picturePosts.slice(0, visibleCards).map((picturePost, index) => (
            <div
              key={picturePost.id}
              className={`picture-card ${
                picturePost.showText ? "show-text" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <img
                className="picture-card-img"
                src={picturePost.pictures_post_url}
                alt={picturePost.pictures_post_title}
              />
              <div className="picture-card-overlay">
                <h3 className="picture-card-h3">
                  {picturePost.pictures_post_title}
                </h3>
                <p>{picturePost.pictures_post_blurb}</p>
                <div className="likes-container">
                  <span><img src={heartIcon} id="heartIcon" /> {picturePost.likes_count}</span>
                  <div><button id="like-button"></button> <img src={thumbIcon} id="thumbIcon"/></div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="show-more-less-container">
        {visibleCards < picturePosts.length && (
          <button className="show-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
        {visibleCards > 4 && (
          <button className="show-button" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default FullGallery;
