import React from 'react';
import './App.css';
import PredictionForm from './PredictionForm';
import PredictionList from './PredictionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JO Predictions</h1>
        <PredictionList />
      </header>
    </div>
  );
}

export default App;
