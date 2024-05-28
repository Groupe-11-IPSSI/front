// src/PredictionForm.js
import React, { useState } from 'react';

function PredictionForm() {
  const [athletes, setAthletes] = useState('');
  const [hosts, setHosts] = useState('');
  const [medals, setMedals] = useState('');
  const [results, setResults] = useState('');
  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ athletes, hosts, medals, results }),
    });

    const data = await response.json();
    setPredictions(data.predictions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Athletes</label>
          <input
            type="text"
            value={athletes}
            onChange={(e) => setAthletes(e.target.value)}
          />
        </div>
        <div>
          <label>Hosts</label>
          <input
            type="text"
            value={hosts}
            onChange={(e) => setHosts(e.target.value)}
          />
        </div>
        <div>
          <label>Medals</label>
          <input
            type="text"
            value={medals}
            onChange={(e) => setMedals(e.target.value)}
          />
        </div>
        <div>
          <label>Results</label>
          <input
            type="text"
            value={results}
            onChange={(e) => setResults(e.target.value)}
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      {predictions && (
        <div>
          <h3>Predictions:</h3>
          <pre>{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PredictionForm;
