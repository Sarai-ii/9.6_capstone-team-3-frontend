import React from 'react';
import UserExchanges from '../components/UserExchanges';

function UEPage({ userId }) {
  return (
    <div id="user-exchages-page">
      <UserExchanges userId={userId} />
    </div>
  );
}

export default UEPage;
