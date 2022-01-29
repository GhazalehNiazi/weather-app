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
  return (
    <div>{chartData &&  options && <Bar options={options} data={chartData}></Bar>}</div>
  );
};
export default WeatherChart;
