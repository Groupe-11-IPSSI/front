import { Typography, Box, Container, Button } from "@mui/material";
import backgroundImage from "../assets/paris2024-background.jpg";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          mt: 8,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
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
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
