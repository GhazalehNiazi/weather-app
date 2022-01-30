import SearchBox from "./SearchBox";
import WeatherReport from "./WeatherReport";
import Images from "./Images";
import classes from "./LeftSide.module.css";
const LeftSide = () => {
  return (
    <div className={classes.container}>
      <SearchBox />
      <h1 className={classes.title}>
        Weather <span>Forecast</span>
      </h1>
      <Images />
      <WeatherReport />
    </div>
  );
};
export default LeftSide;
