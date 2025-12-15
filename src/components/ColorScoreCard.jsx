import React from 'react';
import { descriptions } from '../descriptions';

function ColorScoreCard({ color, score }) {
  const colorInfo = descriptions[color];

  return (
    <div className={`color-score-card ${color}`}>
      <span className="color-name">{colorInfo.name} {colorInfo.emoji}</span>
      <span className="color-score">Score: {score}</span>
    </div>
  );
}

export default ColorScoreCard;
