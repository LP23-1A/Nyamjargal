"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {} from 'chart.js'

export default function DonutChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const mychartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(mychartRef, {
      type: "doughnut",
      data: {
        labels: ["Bills", "Food", "Yellow"],
        datasets: [
          {
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            data: [30, 45, 25],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas
        ref={chartRef}
        style={{ width: "156px", height: "156px" }}
      ></canvas>
    </div>
  );
}
