import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserExchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserExchanges = async () => {
      try {
        // Make an API request to fetch user exchanges
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/exchanges`);

        // Set the fetched exchanges to the state
        setExchanges(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user exchanges:', error);
        setLoading(false);
      }
    };

    // Call the function to fetch user exchanges
    fetchUserExchanges();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>User Exchanges</h2>
      {loading ? (
        <p>Loading exchanges...</p>
      ) : (
        <ul>
          {exchanges.map((exchange) => (
            <li key={exchange.id}>
              {/* Display exchange information */}
              Event ID: {exchange.event_id}, Giver ID: {exchange.giver_id}, Receiver ID: {exchange.receiver_id}
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserExchanges;
