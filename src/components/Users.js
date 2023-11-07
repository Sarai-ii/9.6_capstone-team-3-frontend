import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './users.css'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the server
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <table className="user-list-page">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Street 1</th>
            <th>Street 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Events Joined</th>
            <th>Exchanges Assigned</th>
            <th>Banned</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name_first}</td>
              <td>{user.name_last}</td>
              <td>{user.email}</td>
              <td>{user.address_street1}</td>
              <td>{user.address_street2}</td>
              <td>{user.address_city}</td>
              <td>{user.address_state}</td>
              <td>{user.address_zip}</td>
              <td>{user.events_joined}</td>
              <td>{user.exchanges_assigned}</td>
              <td>{user.user_banned ? "Yes" : "No"}</td>
              <td>{user.date_created}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;


