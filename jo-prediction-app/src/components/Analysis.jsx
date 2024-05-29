import { Box, Button, Typography } from "@mui/material";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

function Analysis() {
  // Exemples de données en dur
  const data = [
    {
      country_name: "USA",
      medal_type: "GOLD",
      count: 30,
    },
    {
      country_name: "USA",
      medal_type: "SILVER",
      count: 20,
    },
    {
      country_name: "USA",
      medal_type: "BRONZE",
      count: 10,
    },
    {
      country_name: "China",
      medal_type: "GOLD",
      count: 25,
    },
    {
      country_name: "China",
      medal_type: "SILVER",
      count: 18,
    },
    {
      country_name: "China",
      medal_type: "BRONZE",
      count: 12,
    },
    {
      country_name: "UK",
      medal_type: "GOLD",
      count: 22,
    },
    {
      country_name: "UK",
      medal_type: "SILVER",
      count: 15,
    },
    {
      country_name: "UK",
      medal_type: "BRONZE",
      count: 8,
    },
  ];

  const processChartData = () => {
    const countries = {};
    data.forEach((item) => {
      if (!countries[item.country_name]) {
        countries[item.country_name] = { GOLD: 0, SILVER: 0, BRONZE: 0 };
      }
      countries[item.country_name][item.medal_type] += item.count;
    });

    const labels = Object.keys(countries);
    const goldData = labels.map((label) => countries[label].GOLD);
    const silverData = labels.map((label) => countries[label].SILVER);
    const bronzeData = labels.map((label) => countries[label].BRONZE);

    return {
      labels,
      datasets: [
        {
          label: "Gold Medals",
          data: goldData,
          backgroundColor: "rgba(255, 215, 0, 0.6)",
        },
        {
          label: "Silver Medals",
          data: silverData,
          backgroundColor: "rgba(192, 192, 192, 0.6)",
        },
        {
          label: "Bronze Medals",
          data: bronzeData,
          backgroundColor: "rgba(205, 127, 50, 0.6)",
        },
      ],
    };
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const pieChartData = {
    labels: ["Gold Medals", "Silver Medals", "Bronze Medals"],
    datasets: [
      {
        label: "Medal Distribution",
        data: data.reduce(
          (acc, item) => {
            if (item.medal_type === "GOLD") acc[0] += item.count;
            if (item.medal_type === "SILVER") acc[1] += item.count;
            if (item.medal_type === "BRONZE") acc[2] += item.count;
            return acc;
          },
          [0, 0, 0]
        ),
        backgroundColor: [
          "rgba(255, 215, 0, 0.6)",
          "rgba(192, 192, 192, 0.6)",
          "rgba(205, 127, 50, 0.6)",
        ],
      },
    ],
  };

  const [chartType, setChartType] = useState("bar");

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Medal Analysis
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          onClick={() => setChartType("bar")}
          sx={{ mr: 1 }}
        >
          Bar Chart
        </Button>
        <Button
          variant="contained"
          onClick={() => setChartType("line")}
          sx={{ mr: 1 }}
        >
          Line Chart
        </Button>
        <Button variant="contained" onClick={() => setChartType("pie")}>
          Pie Chart
        </Button>
      </Box>
      {chartType === "bar" && (
        <Bar data={processChartData()} options={barOptions} />
      )}
      {chartType === "line" && (
        <Line data={processChartData()} options={lineOptions} />
      )}
      {chartType === "pie" && <Pie data={pieChartData} options={pieOptions} />}
    </Box>
  );
}

export default Analysis;
