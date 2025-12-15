import React, { useState } from 'react';
import { questions } from '../questions';
import ProgressBar from './ProgressBar';

function QuestionScreen({ questionIndex, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const question = questions[questionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption) {
      onAnswer(selectedOption.color);
      setSelectedOption(null);
    }
  };

  return (
    <div className="question-screen">
      <ProgressBar current={questionIndex + 1} total={questions.length} />
      <h2>{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button onClick={handleNextClick} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
}

export default QuestionScreen;
