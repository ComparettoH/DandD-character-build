import React from 'react';
import {useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>Greetings, {user.username}!</h1>
      <h4>Ready to begin a new adventure?</h4>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
