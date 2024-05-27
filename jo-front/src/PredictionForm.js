import React, { useState } from 'react';

function PredictionForm() {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setPredictions(data.predictions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
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
