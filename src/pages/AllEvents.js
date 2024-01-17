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
  const [status, setStatus] = useState("") // leaving for the chance to update status in the future 
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([])


  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((response) => {
        const today = new Date().toISOString() //removing the time ruined the comparisons
        // console.log(response.data[2].open_date)
        // console.log(response.data[1].close_date)
        // console.log(today)
        const nonCancelledEvents = response.data.filter((event) => event.status !== "cancelled");
        const currentEvents = nonCancelledEvents.filter((event) => event.open_date <= today && today <= event.close_date)
        const futureEvents = nonCancelledEvents.filter((event)=> event.open_date > today)
        const pastEvents = nonCancelledEvents.filter((event)=> today > event.close_date)
        setEvents(nonCancelledEvents)
        setFilteredEvents(currentEvents)
        setUpcomingEvents(futureEvents)
        setPastEvents(pastEvents) //in case we want to use this in the future
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  console.log(filteredEvents) 

  return (
    <div className="events-webpage-container">
      <ul id= "current" className="current-container" >
      <h2 id='current' className="event-type">Live Event</h2>
        { 
        filteredEvents.map((event) => (
          <div className="">
            <li><h2 className="event-title">{event.title}</h2></li>
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
            <UpcomingEvents key={event.id} event = {event} filteredEvents={filteredEvents} upcomingEvents = {upcomingEvents} userId= {userId}/>
          </div>
        ))}
      </ul>
    </div>
  );
};
