// src/PredictionList.js
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Container } from '@mui/material';

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
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Previous Predictions
      </Typography>
      <List>
        {predictions.length > 0 ? (
          predictions.map((prediction, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={`Prediction ${index + 1}`}
                  secondary={JSON.stringify(prediction, null, 2)}
                />
              </ListItem>
              <Divider component="li" />
            </div>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No predictions found.
          </Typography>
        )}
      </List>
    </Container>
  );
}

export default PredictionList;
