//DEPENDENCIES 
import axios from "axios";
import {useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
//STYLING
import "../css/Events.css"
//API
// const API = process.env.REACT_APP_API_URL;

export default function Event({event}) {

    
  return (
    <div className="card">
        <img 
        className="future-img card-img"
        src={event.image_url}
        alt={event.title}>
        </img>
        <h5>Deadline</h5>
    </div>
  );
};
