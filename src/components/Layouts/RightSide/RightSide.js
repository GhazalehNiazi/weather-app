import { useContext,  useState } from "react";
import weatherContext from "../../../store/weather-context";
import classes from "./RightSide.module.css";

const RightSide = () => {
  const {timezone, temp, feelsLike, sunset, sunrise} = useContext(weatherContext);
  

  return (
    <div className={classes.container}>
      <div>
        <h5 className={classes.top}>palces</h5>
      </div>
      <div className={classes.detail}>
        <div className={classes.topMain}>
          <h3>Today</h3>
          <h5>sat ,1Aug</h5>
        </div>
        <div className={classes.main}>
          <h1>{temp}</h1>
          <h5>{timezone}</h5>
        </div>
        <div className={classes.underMain}>
          <h5>feels like {feelsLike}</h5>
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
