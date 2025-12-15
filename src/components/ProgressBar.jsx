import React from 'react';

function ProgressBar({ current, total }) {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="progress-bar-container">
      <p>Question {current} of {total}</p>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
