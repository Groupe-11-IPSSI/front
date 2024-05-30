import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/paris2024-background.jpg";

function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, p: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Paris 2024
        </Typography>
        <Typography variant="h5" gutterBottom>
          Predicting the Future of the Olympic Games
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
