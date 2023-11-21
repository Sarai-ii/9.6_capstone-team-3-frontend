import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut, // Import signOut from firebase/auth
} from 'firebase/auth';
import Users from '../components/Users';
import { auth } from '../firebaseConfig';

import '../css/login.css';

const SignupLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error('Username and password are required.');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      setLoggedInUser(user);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      setLoggedInUser(user);
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setLoggedInUser(user);
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedInUser(null);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-h1-container">
        <h1 className="to-title">To:</h1>
        <h1 className="from-title">From:</h1>
      </div>
      <p>Join random gift exchanges and spread happiness.</p>

      {/* <Users /> */}

      {loggedInUser ? (
        <div>
          <p className="login-forum-container">You are logged in as {loggedInUser.email}.</p>
          <button className="button" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-forum-container">
          <div className="login-h3-container">
            <h3 className="login-h3">Login / Signup</h3>
          </div>
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
              <button className="button" type="button" onClick={handleGoogleLogin}>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupLogin;
