"use client";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import {Bills, Food, Shopping, Insurance, Clothing} from "@/utilities/IncomeCircle.jsx"

ChartJS.register( ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Bills", "Food", "Shopping", "Insurence", "Clothing"],
    datasets: [
      {
        data: [200000, 500000, 800000, 400000, 100000],
        backgroundColor: [
          "rgba(22, 189, 202, 1)",
          "rgba(28, 100, 242, 1)",
          "rgba(231, 70, 148, 1)",
          "rgba(242, 144, 28, 1)",
          "rgba(253, 186, 140, 1)",
        ],
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    cutoutPersentage: 60,
    plugins: {
      legend: {
        display: false, 
        position: "right",
      },
    },
    elements: {
      arc: {
        borderWidth: 0, 
      },
    },
  });

  const getSymbolForLabel = (label) => {
    const symbols = {
      Bills: <Bills/>,
      Food: <Food/>,
      Shopping: <Shopping/>,
      Insurence: <Insurance/>,
      Clothing: <Clothing/>,
    };
    return symbols[label] || "";
  };

  const total = chartData.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );

  const tableData = chartData.labels.map((label, index) => ({
    label: label,
    value: chartData.datasets[0].data[index],
    percentage: ((chartData.datasets[0].data[index] / total) * 100).toFixed(2),
    color: chartData.datasets[0].backgroundColor[index],
    symbol: getSymbolForLabel(label),
  }));

  return (
    <div className="flex gap-[47px] items-center">
      <div className=" w-[186px] h-[186px]">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div className="table-container">
        <table className="table-auto">
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.symbol}</td>
                <td className=" pl-2"> {data.label} </td>
                <td className="px-8">{data.value}</td>
                <td className="px-3 py-3">{data.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PieChart;