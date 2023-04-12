import classes from "./LeftSide.module.css";
import { useState } from "react";

const locations = [
  {
    location: "Tehrann",
    time: "08:30",
    temp: "50",
    h: "57",
    l: "47",
    weather: "Rain",
    focused: true,
  },
  {
    location: "Tehran",
    time: "08:30",
    temp: "50",
    h: "57",
    l: "47",
    weather: "Rain",
    focused: false,
  },
  {
    location: "Tehrannn",
    time: "08:30",
    temp: "50",
    h: "57",
    l: "47",
    weather: "Rain",
    focused: false,
  },
];

const LeftSide = () => {
  const [focusedLoc, setFocusedLoc] = useState(locations[0].location);

  const clickHandler = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setFocusedLoc(e.target.attributes[0]?.nodeValue);

  };

  return (
    <div className={classes.container}>
      {locations.map((location) => (
        <div
          location={location.location}
          onClick={clickHandler}
          className={`${classes["single-weather"]} ${
            focusedLoc === location.location && classes["focused"]
          }`}
        >
          <div className={`${classes["single-weather-loc-info"]}`}>
            <div className={`${classes["single-weather-loc-info-name"]}`}>
              {location.location}
            </div>
            <div>{location.time}</div>
            <div className={`${classes["single-weather-loc-info-weather"]}`}>
              {location.weather}
            </div>
          </div>
          <div className={`${classes["single-weather-temp-info"]}`}>
            <div className={`${classes["single-weather-temp-info-temp"]}`}>
              {location.temp}°
            </div>
            <div className={`${classes["single-weather-temp-info-hl"]}`}>
              <span> H:{location.h}°</span>
              <span> L:{location.l}°</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LeftSide;
