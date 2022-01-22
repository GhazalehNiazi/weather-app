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
  const [daily, setDaily] = useState(null);

  const api_call = async (e) => {
    e.preventDefault();
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=3960092f469b92d98917ccf6db87f3ba&units=metric";
    const request = axios.get(url);
    const response = await request;
    const current = await response.data.current;
    console.log(response.data);
    console.log(current.sunset);

    setTimezone(response.data.timezone);
    setTemp(current.temp);
    setFeelsLike(current.feels_like);
    setSunrise(current.sunrise);
    setSunset(current.sunset);
    setDaily(response.data.daily);
  };

  return (
    <div className={classes.container}>
      <weatherContext.Provider
        value={{ api_call, timezone, temp, feelsLike, sunset, sunrise, daily }}
      >
        <LeftSide />
        <RightSide />
      </weatherContext.Provider>
    </div>
  );
};
export default MainPage;
