import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";

const data = {
  labels: [
    "Septehmber",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  title: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => {
  const { symbol } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`/finn/${symbol}/candles`).then((res) => {
      setData({
        labels: [
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
        datasets: [
          {
            label: "Price",
            data: res.data.c,
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "red",
          },
        ],
      });
    });
  }, []);
  return (
    <div>
      <h1>Stock Detail</h1>
      <Line data={data} options={options} width={1000} height={500} />
    </div>
  );
};

export default LineChart;
