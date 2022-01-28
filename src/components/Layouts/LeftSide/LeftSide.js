import SearchBox from "./SearchBox";
import WeatherReport from "./WeatherReport";
import classes from "./LeftSide.module.css";
import nyLogo from '../../../assets/ny.jpg';
import franceLogo from '../../../assets/france.jpg';
import dubaiLogo from '../../../assets/dubai.jpg';
import italyLogo from '../../../assets/italy.jpg';
const LeftSide = () => {
  return (
    <div className={classes.container}>
      <SearchBox />
      <h1 className={classes.title}>
        Weather <span>Forecast</span>
      </h1>
      <div className={classes.imgContainer}>
        <div className={classes.image}><img src={nyLogo}></img></div>
        <div className={classes.image}><img src={franceLogo}></img></div>
        <div className={classes.image}><img src={dubaiLogo}></img></div>
        <div className={classes.image}><img src={italyLogo}></img></div>
      </div>
      <WeatherReport />
    </div>
  );
};
export default LeftSide;
