import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1 style={{ backgroundColor: "rgb(228, 246, 200)" }}>Info Page</h1>
      <p style={{ color: "white", backgroundColor: "black" }}>Greetings fellow creators, players, and/or D&D enthusiasts. My name is Hannah Comparetto and I am the creator of this app</p>
      <h1 style={{ backgroundColor: "rgb(228, 246, 200)" }}>Technologies Used:</h1>

      <h1 style={{ backgroundColor: "rgb(228, 246, 200)" }}>Lets Connect! Linked QR code:</h1>
      <img src="https://i.ibb.co/4Zp21VN/IMG-1595.jpg" alt="IMG-1595" border="0" />
    </div>
  );
}

export default InfoPage;
