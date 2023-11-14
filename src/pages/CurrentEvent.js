//DEPENDENCIES 
import axios from "axios";
import {useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
//STYLING
import "../css/Events.css"

export default function CurrentEvent({event}) {
  return (
    <div className="card-text">
      <img className="current-img"
      data-bs-toggle="collapse"
      data-bs-target="#collapseCurrentEvent"
      aria-controls="collapseCurrentEvent"
      src={event.image_url}
      alt={event.title}>
      </img>
  
<div>
  <div className="collapse collapse-horizontal" id="collapseCurrentEvent">
    <div className="card card-body "  id="collapseCurrentEvent">
      <p>{event.description}</p>
    </div>
  </div>
</div>
      {/* {
        Event Description

        Minimum $: event.minimum_spend
        
        Important Dates
        
        Sign ups Opened:
        
        Sign up Closes:
        
        Match Date:
        
        Shipping Deadline:
      } */}
    </div>
  )
}
