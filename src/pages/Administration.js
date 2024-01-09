  // Administration.js

  import React from 'react';
  import { Link } from 'react-router-dom';
  import '../css/admin.css';


  function Administration() {

    return (
      <div className='admin admin-main'>
        <h1>Administration Page</h1>
        <h2>Official Use Only</h2>
        <ul className='admin-link-list'>
            <li>
                <Link to="/admin/make-matches">Make Matches for an Event</Link>
            </li>
            <li>
                <Link to="/">Create Event (nothing here yet)</Link>               
            </li>
            <li>
                <Link to="/admin/exchanges">Exchanges</Link>
            </li>
            <li>
                <Link to="/">TBD 2</Link>
            </li>
            <li>
                <Link to="/">TBD 3</Link>
            </li>
            <li>
                <Link to="/">TBD 4</Link>
            </li>
            <li>
                <Link to="/">TBD 5</Link>
            </li>
        </ul>


      </div>
    )
  }

  export default Administration;