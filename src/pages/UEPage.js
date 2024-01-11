import React from 'react';
import UserExchanges from '../components/UserExchanges';

function UEPage({ userId }) {
  return (
    <div>
      <h1>User Exchanges Page</h1>
      {/* Pass userId to UserExchanges component */}
      <UserExchanges userId={userId} />
    </div>
  );
}

export default UEPage;
