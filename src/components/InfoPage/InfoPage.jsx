import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1>Info Page</h1>
      <p>Greetings fellow creators, players, and/or D&D enthusiasts. My name is Hannah Comparetto and I am the creator of this app</p>
      <a href="https://ibb.co/88Bydfd"><img src="https://i.ibb.co/ZTJQYFY/TWC-Dn-D-5-E-Character-Sheet-v1-7.jpg" alt="TWC-Dn-D-5-E-Character-Sheet-v1-7" border="0" /></a>
    </div>
  );
}

export default InfoPage;
