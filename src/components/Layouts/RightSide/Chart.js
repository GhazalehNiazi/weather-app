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
import { useContext } from "react";
import weatherContext from "../../../store/weather-context";
import { useState } from "react/cjs/react.development";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const WeatherChart = () => {
  const { chartData } = useContext(weatherContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const [showChart, setShowChart] = useState(false);

  const timeout = setTimeout(() => {
    setShowChart(true);
  }, 1000);
  console.log(chartData);

  return showChart && <Bar options={options} data={chartData}></Bar>;
};
export default WeatherChart;
