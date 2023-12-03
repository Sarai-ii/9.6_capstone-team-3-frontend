import React, { useState } from 'react';
import axios from 'axios';

const CreateProfile = ({ email, password, onProfileCreation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressStreet1, setAddressStreet1] = useState('');
  const [addressStreet2, setAddressStreet2] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [bio, setBio] = useState('');

  const handleProfileCreation = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        username: email,
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

      console.log('User created:', response.data);
      onProfileCreation();
    } catch (error) {
      console.error('Profile Creation Error:', error);
      if (error.response) {
        console.error('Server Response Data:', error.response.data);
      }
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <form>
        {/* Add input fields for the required profile information */}
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
          <input type="text" value={addressCity} onChange={(e) => setAddressCity(e.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={addressState} onChange={(e) => setAddressState(e.target.value)} />
        </label>
        <label>
          ZIP Code:
          <input type="text" value={addressZip} onChange={(e) => setAddressZip(e.target.value)} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </label>

        <button type="button" onClick={handleProfileCreation}>
          Finish Signup
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
