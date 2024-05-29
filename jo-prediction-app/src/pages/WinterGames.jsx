// src/App.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Autocomplete,
  TextField
} from '@mui/material';

function App() {
  const [predictions, setPredictions] = useState([]);
  const [selectedMedal, setSelectedMedal] = useState(null);

  const fetchMedals = async (selectedMedal) => {
    const response = await fetch(`http://localhost:5000/medals?game_season=Winter${selectedMedal ? `&medal_type=${selectedMedal}` : ""}`);
    const data = await response.json();
    setPredictions(data);
  };

  useEffect(() => {
  fetchMedals(selectedMedal);
  }, [selectedMedal]);

  const medals = ["GOLD", "SILVER", "BRONZE"];

  // const filteredPredictions = predictions.filter(prediction => {
  //   // console.log(predictions)
  //   const matchesMedal = selectedMedal ? prediction.medals === selectedMedal : true;
  //   const matchesWinter = prediction.season === "Winter";
  //   return matchesMedal && matchesWinter;
  // });

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Jeux Olympique d'Hiver
      </Typography>
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Été Predictions by Medal
        </Typography>
        <Autocomplete
          options={medals}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} label="Select Medal" variant="outlined" />}
          value={selectedMedal}
          onChange={(event, newValue) => {
            setSelectedMedal(newValue)
            fetchMedals(selectedMedal);
          }}
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h4" gutterBottom>
          Predictions for Winter Sports
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sport</TableCell>
                <TableCell>Medals</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {predictions.map((prediction, index) => (
                <TableRow key={index}>
                  <TableCell>{prediction.discipline_title}</TableCell>
                  <TableCell>{prediction.medal_type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default App;
