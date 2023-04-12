import { Suspense } from "react";
import { useState } from "react";
import axios from "axios";
import classes from "./MainPage.module.css";
import weatherContext from "../../store/weather-context";
import { weekDays } from "../helper/year";
import React from "react";
import WarningModal from "./WarningModal";
import Loader from "./Loader";

const LeftSide = React.lazy(() => import("../Layouts/LeftSide/LeftSide"));
const RightSide = React.lazy(() => import("../Layouts/RightSide/RightSide"));

const MainPage = () => {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temp, setTemp] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [chartData, setChartData] = useState({});
  const [uvi, setUvi] = useState(null);
  const [winddeg, setWinddeg] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [weather, setWeather] = useState('');

  const api_call = async () => {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=3960092f469b92d98917ccf6db87f3ba&units=metric";
    const request = axios.get(url);
    const response = await request;
    const current = await response.data.current;
    console.log(response.data);
    setTimezone(response.data.timezone);
    setTemp(current.temp);
    setFeelsLike(response.data.current.feels_like);
    setSunrise(current.sunrise);
    setSunset(current.sunset);
    setDaily(response.data.daily);
    setHourly(response.data.hourly);
    setUvi(response.data.current.uvi);
    setWinddeg(response.data.current.wind_deg);
    setWindspeed(response.data.current.wind_speed);
    setWeather(response.data.current.weather);

    setChartData({
      labels: weekDays.map((data) => data),
      datasets: [
        {
          label: "temp",
          data: response.data.daily.map((data) => data.temp.day),
          backgroundColor: ["#ffbb11"],
        },
      ],
    });
  };

  const [showMain, setShowMain] = useState(false);

  const closeHandler = () => {
    setShowMain(true);
    api_call();
  };
  const [showSide, setShowSide] = useState(true)

  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <div className={classes.container}>
          <weatherContext.Provider
            value={{
              api_call,
              timezone,
              temp,
              feelsLike,
              sunset,
              sunrise,
              daily,
              chartData,
              hourly,
              uvi,
              winddeg,
              windspeed,
              weather
            }}
          >
            {!showMain && <WarningModal onClose={closeHandler} />}
            {showMain && showSide && <LeftSide />}
            {showMain && <RightSide show={setShowSide}/>}
          </weatherContext.Provider>
        </div>
      </Suspense>
    </React.Fragment>
  );
};
export default MainPage;
