import { useContext, useState } from "react";
import weatherContext from "../../../store/weather-context";
import classes from "./RightSide.module.css";

const RightSide = () => {
  const { timezone, temp, feelsLike, sunset, sunrise } =
    useContext(weatherContext);

  const celicusTemp = +temp ;
  const fixedTemp = celicusTemp.toFixed(0);

  const celicusFeelsLike = +feelsLike ;
  const fixedFeelsLike = celicusFeelsLike.toFixed(0);

  const date = new Date();
  const day = date.getDay();

  const month = date.getMonth() + 1;
  return (
    <div className={classes.container}>
      <div>
        <h5 className={classes.top}>palces</h5>
      </div>
      <div className={classes.detail}>
        <div className={classes.topMain}>
          <h3>Today</h3>
          <h5>{day} ,{month}</h5>
        </div>
        <div className={classes.main}>
          <h1>{fixedTemp}°C</h1>
          <h5>{timezone}</h5>
        </div>
        <div className={classes.underMain}>
          <h5>feels like {fixedFeelsLike}</h5>
          <h5>sunset {sunrise}</h5>
        </div>
      </div>
      <div className={classes.rainChance}>
        <h3>chance of rain</h3>
        <div>chart</div>
      </div>
    </div>
  );
};
export default RightSide;
