import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PredictionForm from "../PredictionForm";

function Predictions() {
  const predictions = [
    { sport: "Athletics", age: 23, height: 180, weight: 70, medals: "Gold" },
    { sport: "Swimming", age: 21, height: 175, weight: 68, medals: "Silver" },
  ];

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Prédictions JO 2024
      </Typography>
      <PredictionForm addPrediction={predictions} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sport</TableCell>
              <TableCell>Predicted Age</TableCell>
              <TableCell>Predicted Height (cm)</TableCell>
              <TableCell>Predicted Weight (kg)</TableCell>
              <TableCell>Predicted Medals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {predictions.map((prediction, index) => (
              <TableRow key={index}>
                <TableCell>{prediction.sport}</TableCell>
                <TableCell>{prediction.age}</TableCell>
                <TableCell>{prediction.height}</TableCell>
                <TableCell>{prediction.weight}</TableCell>
                <TableCell>{prediction.medals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Predictions;
