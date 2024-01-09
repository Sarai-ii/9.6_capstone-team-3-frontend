import React, { useState, useEffect } from 'react';
import '../css/AdminExchange.css'; // Import your CSS file for styling

function AdminExchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/exchanges`);
        if (response.ok) {
          const data = await response.json();
          setExchanges(data);
        } else {
          console.error('Failed to fetch exchanges:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching exchanges:', error.message);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/events`);
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error('Failed to fetch events:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching events:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
    fetchEvents();
  }, []);

  return (
    <div className="admin-exchanges-container">
      <h2>Admin Exchanges</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="admin-exchanges-table">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Giver ID</th>
              <th>Receiver ID</th>
              <th>Shipped Date</th>
              <th>Shipping Carrier</th>
              <th>Tracking Number</th>
              <th>Picture Update Complete</th>
              <th>Exchange Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exchange) => (
              <tr key={exchange.id}>
                <td>{exchange.event_id}</td>
                <td>{exchange.giver_id}</td>
                <td>{exchange.receiver_id}</td>
                <td>{exchange.shipped_date}</td>
                <td>{exchange.shipping_carrier}</td>
                <td>{exchange.tracking_number}</td>
                <td>{exchange.picture_update_complete ? 'Yes' : 'No'}</td>
                <td>{exchange.exchange_complete ? 'Yes' : 'No'}</td>
                <td>
                  <button className="admin-action-button">Edit</button>
                  <button className="admin-action-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="admin-section" id="admin-events-section">
        <h3>Events</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="admin-exchanges-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Description</th>
                <th>Open Date</th>
                <th>Close Date</th>
                {/* Add more headers for other event details if needed */}
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.status}</td>
                  <td>{event.description}</td>
                  <td>{event.open_date}</td>
                  <td>{event.close_date}</td>
                  {/* Add more cells for other event details if needed */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="admin-section" id="admin-exchange-pairs-section">
        <h3 className='pairs-h3'>User Pairs: For Exchanges</h3>
        {exchanges.map((exchange) => (
          <div key={exchange.id} className="admin-exchange-pairs">
            <h4>Exchange ID: {exchange.id}</h4>
            <table className="admin-exchanges-table">
              <thead>
                <tr>
                  <th>Giver ID</th>
                  <th>Receiver ID</th>
                  {/* Add more headers for other user pair details if needed */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{exchange.giver_id}</td>
                  <td>{exchange.receiver_id}</td>
                  {/* Add more cells for other user pair details if needed */}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminExchanges;
