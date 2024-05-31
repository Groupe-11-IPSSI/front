import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styles pour le parchemin
const ScrollBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/src/assets/olympics-parchment.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  color: "#333",
  fontFamily: "Georgia, serif",
  fontSize: "18px",
  border: "1px solid #ddd",
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    transition: "opacity 0.3s ease",
    opacity: 0,
  },
  "&:hover::before": {
    opacity: 0.5,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

function OlympicFacts() {
  return (
    <Box mt={5} p={3}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginBottom: "2rem" }}
      >
        Olympic Facts
      </Typography>
      <ScrollBox>
        <Typography variant="body1">
          Fact 1: The Olympic Games were first held in ancient Greece.
        </Typography>
      </ScrollBox>
      <ScrollBox>
        <Typography variant="body1">
          Fact 2: The five rings of the Olympic logo represent the five
          continents.
        </Typography>
      </ScrollBox>
      <ScrollBox>
        <Typography variant="body1">
          Fact 3: The Olympic Games have been held in 23 countries.
        </Typography>
      </ScrollBox>
      <ScrollBox>
        <Typography variant="body1">
          Fact 4: The Olympic Games have been held in 42 cities.
        </Typography>
      </ScrollBox>
      <ScrollBox>
        <Typography variant="body1">
          Fact 5: The Olympic Games have been held 50 times.
        </Typography>
      </ScrollBox>
    </Box>
  );
}

export default OlympicFacts;
