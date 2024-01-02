// DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
// COMPONENTS
import UpcomingEvents from "../components/UpcomingEvents";
import CurrentEvent from "../components/CurrentEvent";
// STYLING
import "../css/Events.css"
// API
const API = process.env.REACT_APP_API_URL;

export default function AllEvents({ userData, userId }) {
  // console.log(userData, userId) // working 12/20
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  // const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((response) => {
        const nonCancelledEvents = response.data.filter((event) => event.status !== "cancelled");
        setEvents(nonCancelledEvents);

        // Get today's date
        const today = new Date().toISOString().split('T')[0];
        
        // Filter events based on today's date
        const todayEvents = nonCancelledEvents.filter((event) => event.open_date <= today && today <= event.close_date);
        const futureEvents = nonCancelledEvents.filter((event)=> event.open_date > today)
        setUpcomingEvents(futureEvents);
        setFilteredEvents(todayEvents);
      })
      .catch((c) => console.warn("catch", c));
  }, []);


    // const toggleMode = () => {
    //   setDarkMode(!isDarkMode);
    // };
    // className={isDarkMode ? 'dark-mode' : 'light-mode'}
    // <button onClick={toggleMode}>Toggle Mode</button>
return (
  <div className="events-webpage-container">
    {/* <header className="hero-img intro-container">
      <h1 className="introduction">Begin your gift giving journey here. </h1>
      <br/>
    </header> */}
    <ul id= "current" className="current-container" >
    <h2 id='current' className="event-type">Live Event</h2>
      {
      filteredEvents.map((event) => (
        <div className="">
          <li><h3 className="event-title">{event.title}</h3></li>
          <CurrentEvent key={event.id} event = {event} userId={userId} />
        </div>
      ))}
    </ul>
    <h2 id= "upcoming" className="event-type">Upcoming Events</h2>
    <ul className="upcoming-container" >
    {
      upcomingEvents.map((event) => (
        <div className="" >
          <li><h3 className="event-title">{event.title}</h3></li>
          <UpcomingEvents key={event.id} event = {event} userId= {userId}/>
        </div>
      ))}
    </ul>
  </div>
);
};
