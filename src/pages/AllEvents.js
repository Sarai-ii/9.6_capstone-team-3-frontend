// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
// COMPONENTS
import UpcomingEvents from "./UpcomingEvents";
import CurrentEvent from "./CurrentEvent";
// STYLING
import "../css/Events.css"
// API
const API = process.env.REACT_APP_API_URL;

export default function AllEvents() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  // const [isDarkMode, setDarkMode] = useState(false);


  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((response) => setEvents(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);


  useEffect(() => {
      // Get today's date
      const today = new Date().toISOString().split('T')[0];
  
      // Filter events based on today's date
      const todayEvents = events.filter((event) => event.open_date <= today && today <= event.close_date);
      const futureEvents = events.filter((event)=> event.open_date > today)
      
      setUpcomingEvents(futureEvents);
      setFilteredEvents(todayEvents);

    }, [events]);

    // const toggleMode = () => {
    //   setDarkMode(!isDarkMode);
    // };
    // className={isDarkMode ? 'dark-mode' : 'light-mode'}
    // <button onClick={toggleMode}>Toggle Mode</button>
return (
  <div >
    <header className="hero-img">
      <h1 className="introduction"> 
        Welcome! Begin your gift giving journey here. 
      </h1>
      <br/>
    </header>
    <h2 className="event-type">Current Event</h2>
    <ul className="current-container" >
      {
      filteredEvents.map((event) => (
        <div className="container">
          <li key={event.id}><h3 className="event-title">{event.title}</h3></li>
          <CurrentEvent key={event.id} event = {event}/>
        </div>
      ))}
    </ul>
    <h2 className="event-type">Upcoming Events</h2>
    <ul className="upcoming-container" >
    {
      upcomingEvents.map((event) => (
        <div className="upcoming-card" >
          <li key={event.id}><h3 className="event-title">{event.title}</h3></li>
          <UpcomingEvents key={event.id} event = {event}/>
        </div>
      ))}
    </ul>
  </div>
);
};
