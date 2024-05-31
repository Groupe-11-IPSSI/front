import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Analysis from "./pages/Analysis";
import OlympicFacts from "./pages/OlympicFacts";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container sx={{ width: "100%", maxWidth: "none" }} xl={{ maxWidth: "none" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/facts" element={<OlympicFacts />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
