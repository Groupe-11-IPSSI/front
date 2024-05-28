import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial",
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
      main: "#0071c5",
    },
    secondary: {
      main: "#FFD700",
    },
  },
});

export default theme;
