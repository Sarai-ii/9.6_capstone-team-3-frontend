// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
// COMPONENTS
import Event from "./Event";
// STYLING
// import ""
// API
const API = process.env.REACT_APP_API_URL;

export default function AllEvents() {
  const [events, setEvents] = useState([])


  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((response) => setEvents(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      {events.map((event) => {
          return <Event 
          
          key={event.id} 
          event={event} 
          />;
        })}
    </div>
  )
};