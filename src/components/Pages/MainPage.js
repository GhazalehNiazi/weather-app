import { useEffect, useState, useContext } from "react/cjs/react.development";
import axios from "axios";
import LeftSide from "../Layouts/LeftSide/LeftSide";
import RightSide from "../Layouts/RightSide/RightSide";
import classes from "./MainPage.module.css";
import weatherContext from "../../store/weather-context";

const MainPage = () => {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temp, setTemp] = useState(null);
  const [timezone, setTimezone] = useState(null);

  const api_call = async (e) => {
    e.preventDefault();
    const url ="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
    const request = axios.get(url);
    const response = await request;
    const current = await response.data.current;
    console.log(current.temp);

    setTimezone(response.data.timezone);
    setTemp(current.temp);
    setFeelsLike(current.feels_like);
    setSunrise(response.data.sunrise);
    setSunset(response.data.sunset);
  };

  return (
    <div className={classes.container}>
      <weatherContext.Provider
        value={{ api_call, timezone, temp, feelsLike, sunset, sunrise }}
      >
        <LeftSide />
        <RightSide />
      </weatherContext.Provider>
    </div>
  );
};
export default MainPage;
