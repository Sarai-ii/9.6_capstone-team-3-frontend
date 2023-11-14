import React, { useState } from 'react';
import axios from 'axios';
import Users from '../components/Users';

import '../css/login.css';

const SignupLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        username,
        password,
      });

      // Assuming the backend sends user data upon successful login
      setLoggedInUser(response.data.user);

      // You may want to redirect the user or perform other actions after login
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error (e.g., display an error message)
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        username,
        password,
      });

      // Assuming the backend sends user data upon successful signup
      setLoggedInUser(response.data);

      // You may want to redirect the user or perform other actions after signup
    } catch (error) {
      console.error('Signup Error:', error);
      // Handle signup error (e.g., display an error message)
    }
  };

  return (
    <div className="login-container">
      <div className="login-h1-container">
        <h1 className="to-title">To:</h1>
        <h1 className="from-title">From:</h1>
      </div>
      <p>Join random gift exchanges and spread happiness.</p>

      <Users />

      {loggedInUser ? (
        <div>
          <p>You are logged in as {loggedInUser.username}.</p>
          {/* Include a logout button or other user-related actions */}
        </div>
      ) : (
        <div className="login-forum-container">
          <h3>Login / Signup</h3>
          <form className="form-container">
            <label className="username-label">
              Username:
              <input
                className="username-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="password-login">
              Password:
              <input
                className="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="button-container">
              <button className="button" type="button" onClick={handleLogin}>
                Login
              </button>
              <button className="button" type="button" onClick={handleSignup}>
                Signup
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupLogin;
