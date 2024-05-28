// src/PredictionForm.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Autocomplete, TextField } from '@mui/material';

function PredictionForm({ addPrediction }) {
  const [athletes, setAthletes] = useState([]);
  const [medals, setMedals] = useState([]);
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [selectedMedal, setSelectedMedal] = useState(null);

  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch('http://localhost:5000/athletes');
      const data = await response.json();
      setAthletes(data);
    };

    const fetchMedals = async () => {
      const response = await fetch('http://localhost:5000/medals');
      const data = await response.json();
      setMedals(data);
    };

    fetchAthletes();
    fetchMedals();
  }, []);

  const handlePredict = () => {
    const newPrediction = {
      sport: selectedAthlete, // Placeholder, replace with the actual sport if available
      age: Math.floor(Math.random() * 10) + 20, // Placeholder, replace with actual age prediction logic
      height: Math.floor(Math.random() * 30) + 150, // Placeholder, replace with actual height prediction logic
      weight: Math.floor(Math.random() * 20) + 50, // Placeholder, replace with actual weight prediction logic
      medals: selectedMedal,
    };

    addPrediction(newPrediction);

    // Reset selections
    setSelectedAthlete(null);
    setSelectedMedal(null);
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Make a Prediction
      </Typography>
      <Autocomplete
        options={athletes}
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="Select Athlete" variant="outlined" />}
        value={selectedAthlete}
        onChange={(event, newValue) => setSelectedAthlete(newValue)}
        style={{ marginBottom: 20 }}
      />
      <Autocomplete
        options={medals}
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="Select Medal" variant="outlined" />}
        value={selectedMedal}
        onChange={(event, newValue) => setSelectedMedal(newValue)}
        style={{ marginBottom: 20 }}
      />
      <Button variant="contained" color="primary" onClick={handlePredict} disabled={!selectedAthlete || !selectedMedal}>
        Predict
      </Button>
    </Container>
  );
}

export default PredictionForm;
