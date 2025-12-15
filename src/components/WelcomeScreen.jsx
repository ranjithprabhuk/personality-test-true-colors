import React, { useState } from 'react';

function WelcomeScreen({ onStartTest }) {
  const [name, setName] = useState('');

  const handleStartClick = () => {
    if (name.trim()) {
      onStartTest(name.trim());
    }
  };

  return (
    <div className="welcome-screen">
      <h1>Welcome to the True Colors Personality Test</h1>
      <p>Discover your personality type and understand your strengths.</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Enter your name"
      />
      <button onClick={handleStartClick} disabled={!name.trim()}>
        Start Test
      </button>
    </div>
  );
}

export default WelcomeScreen;
