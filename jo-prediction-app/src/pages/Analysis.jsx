import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];

const Analysis = () => {
  const [medalsData, setMedalsData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [athletes, setAthletes] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [yearlyMedalsData, setYearlyMedalsData] = useState([]);
  const [topAthletes, setTopAthletes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const medalsResponse = await fetch("http://localhost:5000/medals");
        const medalsData = await medalsResponse.json();
        setMedalsData(medalsData);

        const countriesResponse = await fetch(
          "http://localhost:5000/countries"
        );
        const countriesData = await countriesResponse.json();
        setCountries(countriesData);

        const athletesResponse = await fetch("http://localhost:5000/athletes");
        const athletesData = await athletesResponse.json();
        setAthletes(athletesData);

        const yearsResponse = await fetch("http://localhost:5000/years");
        const yearsData = await yearsResponse.json();
        setYears(yearsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedYear) {
      const fetchYearlyMedals = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/medals?year=${selectedYear}`
          );
          const data = await response.json();
          setYearlyMedalsData(data);
        } catch (error) {
          console.error("Error fetching yearly medals:", error);
        }
      };

      fetchYearlyMedals();
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedCountry) {
      const fetchCountryMedals = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/medals?country=${selectedCountry}`
          );
          const data = await response.json();
          setYearlyMedalsData(data);
        } catch (error) {
          console.error("Error fetching country medals:", error);
        }
      };

      fetchCountryMedals();
    }
  }, [selectedCountry]);

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginBottom: "2rem" }}
      >
        Olympic Games Analysis
      </Typography>

      <Box sx={{ marginBottom: "4rem" }}>
        <TextField
          label="Select Year"
          type="number"
          value={selectedYear || ""}
          onChange={(e) => setSelectedYear(e.target.value)}
          fullWidth
          sx={{ marginBottom: "2rem" }}
        />
        <Typography variant="h5" gutterBottom>
          Country with the Most Medals in {selectedYear}
        </Typography>
        {yearlyMedalsData.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell>Total Medals</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {yearlyMedalsData
                  .sort((a, b) => b.total_medals - a.total_medals)
                  .slice(0, 1)
                  .map((country, index) => (
                    <TableRow key={index}>
                      <TableCell>{country.country_name}</TableCell>
                      <TableCell>{country.total_medals}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Box sx={{ marginBottom: "4rem" }}>
        <Typography variant="h5" gutterBottom>
          Top 10 Countries by Medals in {selectedYear}
        </Typography>
        <BarChart width={600} height={300} data={yearlyMedalsData.slice(0, 10)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gold_count" fill="#FFD700" name="Gold Medals" />
          <Bar dataKey="silver_count" fill="#C0C0C0" name="Silver Medals" />
          <Bar dataKey="bronze_count" fill="#CD7F32" name="Bronze Medals" />
        </BarChart>
      </Box>

      <Box sx={{ marginBottom: "4rem" }}>
        <Autocomplete
          options={countries}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} label="Select Country" variant="outlined" />
          )}
          value={selectedCountry}
          onChange={(event, newValue) => setSelectedCountry(newValue)}
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h5" gutterBottom>
          Medals Over the Years for {selectedCountry}
        </Typography>
        <LineChart width={600} height={300} data={yearlyMedalsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total_medals"
            stroke="#8884d8"
            name="Total Medals"
          />
        </LineChart>
      </Box>

      <Box sx={{ marginBottom: "4rem" }}>
        <Typography variant="h5" gutterBottom>
          Top 10 Athletes by Total Medals
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Athlete</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Total Medals</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {athletes
                .sort((a, b) => b.total_medals - a.total_medals)
                .slice(0, 10)
                .map((athlete, index) => (
                  <TableRow key={index}>
                    <TableCell>{athlete.athlete_full_name}</TableCell>
                    <TableCell>{athlete.country_name}</TableCell>
                    <TableCell>{athlete.total_medals}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Analysis;
