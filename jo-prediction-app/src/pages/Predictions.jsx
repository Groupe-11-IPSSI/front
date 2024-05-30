import { useEffect, useState } from "react";
import TopCountriesTable from "../components/TopCountriesTable";
import CountryMedalChart from "../components/CountryMedalChart";

const Predictions = () => {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPredictions = async () => {
    const response = await fetch("http://localhost:5000/predict");

    setPredictions(await response.json());
    setIsLoading(false);
  };

  useEffect(() => {
    getPredictions();
  }, []);

  if (isLoading)
    return (
      <p style={{ width: "max-content", margin: "56px auto" }}>Chargement..</p>
    );

  return (
    <>
      <TopCountriesTable predictions={predictions} />
      <CountryMedalChart predictions={predictions} />
    </>
  );
};

export default Predictions;
