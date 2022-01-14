import SearchBox from "./SearchBox";
import WeatherReport from "./WeatherReport";
import classes from "./LeftSide.module.css";
import Api from "../../Api";

const LeftSide = () => {
  return (
    <div className={classes.container}>
      <SearchBox />
      <h1 className={classes.title}>
        Weather <span>Forecast</span>
      </h1>
      <Api/>
      <div className={classes.imgContainer}>
        <div>img</div>
        <div>img</div>
        <div>img</div>
      </div>
      <WeatherReport />
    </div>
  );
};
export default LeftSide;
