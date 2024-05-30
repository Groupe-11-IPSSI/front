import { Box } from "@mui/material";
import TopCountriesTable from "../components/TopCountriesTable";
import CountryMedalChart from "../components/CountryMedalChart";

function Predictions() {
  return (
    <Box mt={5} p={3}>
      <TopCountriesTable />
      <CountryMedalChart />
    </Box>
  );
}

export default Predictions;
