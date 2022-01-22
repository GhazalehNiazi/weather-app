import { useContext, useState } from "react";
import weatherContext from "../../../store/weather-context";
import { weekDays, months } from "../../helper/year";
import classes from "./RightSide.module.css";

const RightSide = () => {
  const { timezone, temp, feelsLike, sunset, sunrise } =
    useContext(weatherContext);

  const celicusTemp = +temp;
  const fixedTemp = celicusTemp.toFixed(0);

  const celicusFeelsLike = +feelsLike;
  const fixedFeelsLike = celicusFeelsLike.toFixed(0);

  // BUG :: sunset is undefined!! even though it is defined!
  // const sunsetHour = sunset.getHours();
  // const sunsetMinute = sunset.getMinutes();

  const date = new Date();
  const dateNumber = date.getDate();
  const day = date.getDay();
  const dayName = weekDays[day];
  const month = date.getMonth();
  const monthName = months[month];

  // const countryName = timezone.split('/').join(' ');
  return (
    <div className={classes.container}>
      <div>
        <h5 className={classes.top}>palces</h5>
      </div>
      <div className={classes.detail}>
        <div className={classes.topMain}>
          <img src="https://img.icons8.com/dusk/64/000000/rain--v2.png" />
          <div className={classes.topMainInfo}>
          <h3>Today</h3>
          <h5>
            {dayName} ,{dateNumber}
            {monthName}
          </h5>
          </div>
        </div>
        <div className={classes.main}>
          <h1>
            {fixedTemp} <span>°C</span>
          </h1>
          <h5>{timezone.split('/').join(' ')}</h5>
        </div>
        <div className={classes.underMain}>
          <h5>feels like {fixedFeelsLike}</h5>
          <h5>
            sunset
            {/* {sunsetHour}:{sunsetMinute} */}
          </h5>
        </div>
      </div>
      <div className={classes.rainChance}>
        <h3>chance of rain</h3>
        <div>chart</div>
      </div>
      {/* <a className={classes.source} href="https://icons8.com/icon/jQd6n8cz0bH5/rain"> */}
        {/* Rain icon by Icons8
      </a> */}
    </div>
  );
};
export default RightSide;
