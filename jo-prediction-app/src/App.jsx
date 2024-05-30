import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import WinterGames from "./pages/WinterGames";
import SummerGames from "./pages/SummerGames";
import Analysis from "./pages/Analysis";
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
          <Route path="/winter" element={<WinterGames />} />
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
