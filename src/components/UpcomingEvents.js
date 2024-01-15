import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//STYLING
import "../css/Events.css"
//API

export default function UpcomingEvents({ upcomingEvents, filteredEvents, event }) {
  const [isHovered, setIsHovered] = useState(false)
  const calculateDaysUntil = () => {
    const today = new Date();
    const signUp = new Date(event.open_date);
    const timeDifference = signUp.getTime() - today.getTime()
    return timeDifference > 0 ? `${Math.ceil(timeDifference / (1000 * 3600 * 24))}
    days until the event`
    :  `${Math.ceil((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600))}
    hours and ${Math.ceil((timeDifference % (1000 * 3600)) / (1000 * 60))} minutes until the event`
  };
  const signUpMinusTime = event.open_date.split('T')[0].split("-")
  const matchDate= event.match_date.split('T')[0].split("-")
  const year = event.open_date.split("T")[0].slice(0,4)
  const close = event.close_date.split('T')[0].split("-")


  return (
    <div className="upcoming-details-container"
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}>
      <div className={`upcoming-img-container ${isHovered ? 'hovered' : ''}`}>
        <div className="details-overlay">
          <h2 className="details-UEHeader">Event Timeline</h2>
          <span className="timeline-UE">Registration Period: </span>{signUpMinusTime[1]}/{signUpMinusTime[2]}/{year} - {close[1]}/{close[2]}/{year}
          <br />
          <span className="timeline-UE">Matching Date: </span>{matchDate[1]}/{matchDate[2]}/{year} 
          <h5 className="description-price-title">
            <span className="price-title-UE">Minimum Spend:</span>
            <span className="price-UE">${event.minimum_spend}</span>
          </h5>
          <h5 className="description-price-title">
            <span className="price-title-UE">Maximum Spend:</span>
            <span className="price-UE">${event.minimum_spend + 40} </span>
          </h5>
        </div>
        <img
          className="future-img"
          src={event.image_url}
          alt={event.title}
        />
      </div>
      <h5 className="days-until">
        {calculateDaysUntil()} 
      </h5>
    </div>
  );
}
