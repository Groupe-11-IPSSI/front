import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SummerGames from "./pages/SummerGames";
import Analysis from "./components/Analysis";
import OlympicFacts from "./pages/OlympicFacts";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summer" element={<SummerGames />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/facts" element={<OlympicFacts />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
