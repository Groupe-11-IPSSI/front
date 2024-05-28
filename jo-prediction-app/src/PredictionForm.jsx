import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Autocomplete, TextField } from '@mui/material';

function PredictionForm() {
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

  const handlePredict = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        athlete: selectedAthlete,
        medal: selectedMedal,
      }),
    });

    if (response.ok) {
      alert('Prediction made successfully!');
    } else {
      alert('Failed to make prediction.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Faire une Prédiction
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
        Prédire
      </Button>
    </Container>
  );
}

export default PredictionForm;
