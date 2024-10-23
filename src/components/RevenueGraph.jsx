import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueGraph = () => {
  const [timeRange, setTimeRange] = useState("Last 12 months");

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Sales",
        data: [70, 75, 100, 50, 40, 110, 20, 30, 90, 80, 75],
        backgroundColor: "rgb(59, 130, 246)",
      },
      {
        label: "Appointments",
        data: [70, 75, 20, 30, 90, 80, 75, 100, 50, 40, 110],
        backgroundColor: "rgb(31, 41, 55)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      // title: {
      //   display: true,
      //   text: "Revenue",
      //   align: "start",
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold">Revenue</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Last 12 months</option>
          <option>Last 6 months</option>
          <option>Last 3 months</option>
          <option>Last 1 month</option>
        </select>
      </div>
      {/* <div className="md:h-80 flex items-center justify-center"> */}{" "}
      <Bar data={data} options={options} />
      {/* </div> */}
    </div>
  );
};

export default RevenueGraph;
