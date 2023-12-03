import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

import "../css/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error("Username and password are required.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      setLoggedInUser(user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setLoggedInUser(user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-h1-container">
        <h1 className="to-title">Happiness</h1>
        <h1 className="from-title">Exchange</h1>
      </div>
      <p>Join random gift exchanges and spread happiness.</p>

      {loggedInUser ? (
        <div>
          <div className="login-forum-container">
            You are logged in as {loggedInUser.email}.
            <button
              id="logout"
              className="button logout-button"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="login-forum-container">
          <div className="login-h3-container">
            <h3 className="login-h3">Login</h3>
          </div>
          <form className="form-container">
            <label className="username-label">
              Username:
              <input
                className="username-input"
                type="email"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="password-login">
              Password:
              <input
                className="password-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="button-container">
              <button className="button" type="button" onClick={handleLogin}>
                Login
              </button>
              <Link to="/signup">
                <button className="button" type="button">
                  Signup
                </button>
              </Link>
              <button
                id="google-login-button"
                className="google-btn"
                type="button"
                onClick={handleGoogleLogin}
              >
                <div className="google-icon-wrapper"></div>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
