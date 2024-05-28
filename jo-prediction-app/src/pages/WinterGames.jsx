import { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";

function WinterGames() {
  const [filters, setFilters] = useState({
    medal: "",
    year: "",
    country: "",
    season: "Summer",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      medal: "",
      year: "",
      country: "",
      season: "Winter",
    });
  };

  return (
    <Box mt={5}>
      <TextField
        select
        label="Medal"
        name="medal"
        value={filters.medal}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
      >
        <MenuItem value="Gold">Gold</MenuItem>
        <MenuItem value="Silver">Silver</MenuItem>
        <MenuItem value="Bronze">Bronze</MenuItem>
      </TextField>
      <TextField
        label="Year"
        name="year"
        value={filters.year}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Country"
        name="country"
        value={filters.country}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Box>
    </Box>
  );
}

export default WinterGames;
