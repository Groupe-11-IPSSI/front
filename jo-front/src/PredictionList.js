// src/PredictionList.js
import React, { useEffect, useState } from 'react';

function PredictionList() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      const response = await fetch('http://localhost:5000/get_predictions');
      const data = await response.json();
      setPredictions(data);
    };

    fetchPredictions();
  }, []);

  return (
    <div>
      <h3>Previous Predictions</h3>
      {predictions.length > 0 ? (
        <ul>
          {predictions.map((prediction) => (
            <li key={prediction.id}>
              <strong>Prediction ID:</strong> {prediction.id} <br />
              <strong>Timestamp:</strong> {prediction.timestamp} <br />
              <strong>Prediction:</strong> {prediction.prediction} <br />
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No predictions found.</p>
      )}
    </div>
  );
}

export default PredictionList;
