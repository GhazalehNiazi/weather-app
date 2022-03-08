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
import classes from './RightSide.module.css';
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
      },
      title: {
        display: false,
      },
    },
  };
  const [showChart, setShowChart] = useState(false);

  const timeout = setTimeout(() => {
    setShowChart(true);
  }, 1000);

  return showChart && <Bar options={options} data={chartData} className={classes.rainChance}></Bar>;
};
export default WeatherChart;
