import SearchBox from "./SearchBox";
import WeatherReport from "./WeatherReport";
import Images from "./Images";
import classes from "./LeftSide.module.css";
const LeftSide = () => {
  return (
    <div className={classes.container}>
      <SearchBox className={classes.searchbox}/>
      <h1 className={classes.title}>
        Weather <span>Forecast</span>
      </h1>
      <Images className={classes.images}/>
      <WeatherReport className={classes.weatherReport}/>
    </div>
  );
};
export default LeftSide;
