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

const topCountries = [
  { country: "USA", totalMedals: 120 },
  { country: "China", totalMedals: 110 },
  { country: "Russia", totalMedals: 90 },
  { country: "Germany", totalMedals: 85 },
  { country: "Japan", totalMedals: 80 },
  { country: "Australia", totalMedals: 70 },
  { country: "France", totalMedals: 60 },
  { country: "Italy", totalMedals: 55 },
  { country: "Great Britain", totalMedals: 50 },
  { country: "Canada", totalMedals: 45 },
];

const TopCountriesTable = () => {
  return (
    <Box mt={5} p={3}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginBottom: "2rem" }}
      >
        Top 10 Predicted Countries
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Total Medals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topCountries.map((country, index) => (
              <TableRow key={index}>
                <TableCell>{country.country}</TableCell>
                <TableCell>{country.totalMedals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopCountriesTable;
