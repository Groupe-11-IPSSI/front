import { Box, Typography } from "@mui/material";

function HomePage() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3">Welcome to the JO Prediction App</Typography>
      <Typography variant="h5">
        Predicting the Future of the Olympic Games
      </Typography>
      <img
        src="/olympic-logo.png"
        alt="Olympic Logo"
        // style={{ marginTop: "200px", width: "200px" }}
      />
    </Box>
  );
}

export default HomePage;
