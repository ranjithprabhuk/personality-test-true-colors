import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InstructionsScreen from './components/InstructionsScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import { questions } from './questions';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // welcome, instructions, questions, results
  const [userName, setUserName] = useState('');
  const [scores, setScores] = useState({ blue: 0, gold: 0, green: 0, orange: 0 });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStartTest = (name) => {
    setUserName(name);
    setCurrentScreen('instructions');
  };

  const handleBeginQuestions = () => {
    setCurrentScreen('questions');
  };

  const handleAnswer = (color) => {
    setScores((prevScores) => ({
      ...prevScores,
      [color]: prevScores[color] + 1,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen('results');
    }
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setUserName('');
    setScores({ blue: 0, gold: 0, green: 0, orange: 0 });
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="app-container">
      {currentScreen === 'welcome' && <WelcomeScreen onStartTest={handleStartTest} />}
      {currentScreen === 'instructions' && <InstructionsScreen onBeginQuestions={handleBeginQuestions} />}
      {currentScreen === 'questions' && (
        <QuestionScreen
          questionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}
      {currentScreen === 'results' && (
        <ResultsScreen
          userName={userName}
          scores={scores}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
