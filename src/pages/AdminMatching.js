  // AdminMatching.js

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
        if (!eventId) {
          console.error('There has to be an event ID');
          return;
        }
        // this API request fetches matched users for the specified event ID
        const response = await axios.get(`${API}/users/match-users/${eventId}`);
        setMatches(response.data);
        console.log('Matched users:', response.data);
      } catch (error){
        // console.log(error)
        console.error('Error matching users:', error)
          // Do we need to Handle the error, e.g., show an error message to the user
      }
    };

    const handleEventIdChange = (event) => {
      setEventId(event.target.value);
    };
      
    return (
      <div className='admin admin-matching'>
        <h2>Matching Page</h2>

        {/* I want the administrator to be able to enter any event number they want.  */}
        <hr/>
        <label>
          Event ID:
          <input type='text' value={eventId} onChange={handleEventIdChange} id='input-event-id' />
        </label>
        
        <hr className='hidden-hr'/>
        <button className='admin matching button' onClick={handleClickMatch}>
          Match users for this event
        </button>
        <hr/>
      </div>
    )
  }

  export default AdminMatching