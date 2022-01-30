import { useContext } from "react";
import weatherContext from "../../../store/weather-context";
import classes from "./WeatherReport.module.css";
import { weekDays } from "../../helper/year";
const WeatherReport = () => {
  const { daily } = useContext(weatherContext);
  const weekday = weekDays.map((day, index) => {
    // TODO fix the week days index based on today
    return (
      <div key={day} className={classes.day}>
        {day}
        <div>{daily && `${daily[index].weather[0].description}`}</div>
        <div>{daily && `${daily[index].clouds}`}</div>
        <div>{daily && `${daily[index].temp.day}`}</div>
        <div>{daily && `${daily[index].feels_like.day}`}</div>
      </div>
    );
  });
  return (
    <div>
      <div className={classes.timeDeclation}>
        <div>Week</div>
        <div>Month</div>
      </div>
      <div className={classes.weekDays}>{weekday}</div>
    </div>
  );
};
export default WeatherReport;
