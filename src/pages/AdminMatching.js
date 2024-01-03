import React, { useState } from 'react';
import axios from 'axios';
import '../css/admin.css';

const API = process.env.REACT_APP_API_URL;

function AdminMatching() {
  const [eventId, setEventId] = useState("");
  const [matches, setMatches] = useState([]);

  const handleClickMatch = async () => {
    console.log("You pressed the button. Nothing will happen here, but check the back end.")
    try {
      const eventId = "1";
      await axios.get(`${API}/users/match-users/${eventId}`);
    }
    catch (error){
      console.log(error)
      console.error(error)
    }
  };
    
  return (
    <div className='admin admin-matching'>
      <p>Title: AdminMatching</p>

      {/* I want the administrator to be able to enter any event number they want.  */}
      
      <p>Button:</p>
      <button className='admin matching button' onClick={handleClickMatch}>
        Match users for this event
      </button>
      <p>Last line</p>
    </div>
  )
}

export default AdminMatching