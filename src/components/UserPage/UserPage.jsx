import React from 'react';
import {useSelector} from 'react-redux';
import './UserPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const goToBuild = () => {
    history.push('/character-build-1')
};

const goToList = () => {
  history.push('/character-list')
};

  return (
    <div className="container">
      <span className='Greeting'>
      <h1>Greetings, {user.username}!</h1>
      <img src="https://i.ibb.co/rQTg1XC/one-scroll.png" alt="one-scroll" border="0"/>
      </span>
      <br></br>
      <button style={{color: 'black'}}className="btn" onClick={goToBuild}>Create New Character</button>
      <button style={{color: 'black'}}className="btn" onClick={goToList}>Saved Characters</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
