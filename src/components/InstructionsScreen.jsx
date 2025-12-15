import React from 'react';

function InstructionsScreen({ onBeginQuestions }) {
  return (
    <div className="instructions-screen">
      <h2>Instructions</h2>
      <p>For each question, choose the option that best describes you.</p>
      <p>Answer honestly to get the most accurate results.</p>
      <button onClick={onBeginQuestions}>Begin Questions</button>
    </div>
  );
}

export default InstructionsScreen;
