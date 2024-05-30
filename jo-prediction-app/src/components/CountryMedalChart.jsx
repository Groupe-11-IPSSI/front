import { Autocomplete, Box, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const mockMedalData = {
  France: { gold: 50, silver: 40, bronze: 30 },
  China: { gold: 45, silver: 35, bronze: 30 },
  Russia: { gold: 30, silver: 30, bronze: 30 },
};

const countries = [
  { country_name: "France" },
  { country_name: "China" },
  { country_name: "Russia" },
];

const COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];

const CountryMedalChart = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [medalData, setMedalData] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      const data = mockMedalData[selectedCountry.country_name];
      if (data) {
        setMedalData([
          { name: "Gold", value: data.gold },
          { name: "Silver", value: data.silver },
          { name: "Bronze", value: data.bronze },
        ]);
      }
    }
  }, [selectedCountry]);

  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.country_name}
        renderInput={(params) => (
          <TextField {...params} label="Select Country" variant="outlined" />
        )}
        value={selectedCountry}
        onChange={(event, newValue) => setSelectedCountry(newValue)}
        style={{ marginBottom: 20 }}
      />
      {medalData.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <PieChart width={400} height={400}>
            <Pie
              data={medalData}
              cx="50%"
              cy="50%"
              label={({ name, value }) => `${name}: ${value}`}
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {medalData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      )}
    </Container>
  );
};

export default CountryMedalChart;
