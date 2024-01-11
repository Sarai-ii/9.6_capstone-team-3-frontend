import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function UserExchanges({ userId }) {
  const [userExchanges, setUserExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserExchanges = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/exchanges/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUserExchanges(data);
        } else {
          console.error('Failed to fetch user exchanges:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user exchanges:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserExchanges();
  }, [userId]);

  const handleEditExchange = async (id, updatedData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/exchanges/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Update the local state with the edited exchange
        setUserExchanges((prevExchanges) =>
          prevExchanges.map((exchange) => (exchange.id === id ? { ...exchange, ...updatedData } : exchange))
        );
      } else {
        console.error('Failed to edit exchange:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing exchange:', error.message);
    }
  };

  const handleDeleteExchange = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/exchanges/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted exchange from the local state
        setUserExchanges((prevExchanges) => prevExchanges.filter((exchange) => exchange.id !== id));
      } else {
        console.error('Failed to delete exchange:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting exchange:', error.message);
    }
  };

  return (
    <div>
      <h2>User Exchanges</h2>
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
            {userExchanges.map((exchange) => (
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
                  <button
                    className="user-action-button"
                    onClick={() => handleEditExchange(exchange.id, { shipping_carrier: 'New Value' })}
                  >
                    Edit Shipping Carrier
                  </button>
                  <button
                    className="user-action-button"
                    onClick={() => handleEditExchange(exchange.id, { tracking_number: 'New Value' })}
                  >
                    Edit Tracking Number
                  </button>
                  <button className="user-action-button" onClick={() => handleDeleteExchange(exchange.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserExchanges;

