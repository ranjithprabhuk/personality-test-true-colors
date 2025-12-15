import React from 'react';
import { descriptions } from '../descriptions';
import ColorScoreCard from './ColorScoreCard';

function ResultsScreen({ userName, scores, onRestart }) {
  const getDominantColor = () => {
    let dominantColor = '';
    let maxScore = -1;
    for (const color in scores) {
      if (scores[color] > maxScore) {
        maxScore = scores[color];
        dominantColor = color;
      }
    }
    return dominantColor;
  };

  const dominantColor = getDominantColor();
  const dominantColorInfo = descriptions[dominantColor];

  return (
    <div className="results-screen">
      <h2>Hey {userName}, here’s your True Colors personality!</h2>
      <div className={`dominant-color-card ${dominantColor}`}>
        <h3>Your dominant color is {dominantColorInfo.name} {dominantColorInfo.emoji}</h3>
        <p>{dominantColorInfo.description}</p>
      </div>

      <div className="score-breakdown">
        <h4>Score Breakdown:</h4>
        {Object.keys(scores).map(color => (
          <ColorScoreCard key={color} color={color} score={scores[color]} />
        ))}
      </div>

      <div className="strengths-challenges">
        <div className="strengths">
          <h4>Strengths of {dominantColorInfo.name}:</h4>
          <ul>
            {dominantColorInfo.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className="challenges">
          <h4>Potential Challenges for {dominantColorInfo.name}:</h4>
          <ul>
            {dominantColorInfo.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={onRestart}>Restart Test</button>
    </div>
  );
}

export default ResultsScreen;
