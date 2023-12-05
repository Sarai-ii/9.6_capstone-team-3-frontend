import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addressStreet1, setAddressStreet1] = useState('');
    const [addressStreet2, setAddressStreet2] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressZip, setAddressZip] = useState('');
    const [bio, setBio] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
  
    const handleSignup = async (e) => {
      e.preventDefault(); 
  
      try {
        setIsLoading(true); 
  
        if (!email || !password || !username || !firstName || !lastName) {
          setError('Email, password, username, first name, and last name are required.');
          setIsLoading(false); 
          return;
        }
    
        // Create user in Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Firebase user created:', userCredential.user.uid);
        console.log('Firebase user created:', userCredential.user);
    
        // Create user profile on your server
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
          username,
          password,
          admin: false,
          verified: false,
          name_first: firstName,
          name_last: lastName,
          email,
          address_street1: addressStreet1,
          address_street2: addressStreet2,
          address_city: addressCity,
          address_state: addressState,
          address_zip: addressZip,
          user_banned: false,
          user_premium: false,
          isluxury: false,
          bio,
        });
    
        console.log('Backend response:', response.data);
    
        setSuccessMessage(
          `Signup successful! You are now logged in as ${email}.`
        );
        setError(null);
      } catch (error) {
        console.error('Signup Error:', error.message);
        setSuccessMessage(null);
        setError(`Signup Error: ${error.message}`);
      } finally {
        setIsLoading(false); 
      }
    };
    
  
    return (
      <div>
        <h1>Create an account</h1>
        <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Street Address 1:
          <input
            type="text"
            value={addressStreet1}
            onChange={(e) => setAddressStreet1(e.target.value)}
          />
        </label>
        <label>
          Street Address 2:
          <input
            type="text"
            value={addressStreet2}
            onChange={(e) => setAddressStreet2(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={addressCity}
            onChange={(e) => setAddressCity(e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={addressState}
            onChange={(e) => setAddressState(e.target.value)}
          />
        </label>
        <label>
          ZIP Code:
          <input
            type="text"
            value={addressZip}
            onChange={(e) => setAddressZip(e.target.value)}
          />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Signup;