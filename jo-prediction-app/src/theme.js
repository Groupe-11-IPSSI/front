import { createTheme } from "@mui/material/styles";
import { red, yellow, green, blue, grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Roboto, Arial", // Updated font family
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#ebd197", // Blue
    },
    secondary: {
      main: "#0071c5", // Gold
    },
    error: {
      main: red[700], // Red
    },
    warning: {
      main: yellow[700], // Yellow
    },
    info: {
      main: blue[700], // Darker Blue for contrast
    },
    success: {
      main: green[700], // Green
    },
    grey: {
      main: grey[900], // Black shade from grey
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
