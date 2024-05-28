import { Box, Typography } from "@mui/material";

function OlympicFacts() {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Olympic Facts
      </Typography>
      <Typography variant="body1">
        Fact 1: The Olympic Games were first held in ancient Greece.
      </Typography>
      <Typography variant="body1">
        Fact 2: The five rings of the Olympic logo represent the five
        continents.
      </Typography>
      {/* Ajoutez d'autres faits intéressants */}
    </Box>
  );
}

export default OlympicFacts;
