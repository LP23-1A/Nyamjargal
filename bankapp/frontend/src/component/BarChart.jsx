"use client";
import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
    datasets: [
      {
        label: true,
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
        backgroundColor: "rgb(132, 204, 22)",
      },
      {
        label: false,
        data: [2200000, 2200000, 2200000, 2200000, 2200000, 2200000, 2200000],
        backgroundColor: "rgb(249, 115, 22)",
      },
    ],
  });

  return (
      <div>
        <Bar data={chartData}  width={"590px"} height={"226px"} />
      </div>
  );
};

export default BarChart;