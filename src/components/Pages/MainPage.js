import { useEffect, useState, useContext } from "react/cjs/react.development";
import axios from "axios";
import LeftSide from "../Layouts/LeftSide/LeftSide";
import RightSide from "../Layouts/RightSide/RightSide";
import classes from "./MainPage.module.css";
import weatherContext from "../../store/weather-context";
import { weekDays } from "../helper/year";
import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={style.container}>
      <div onCloseButton={props.onClose}>make sure you are not using VPN.</div>
      <button type="submit">OK!</button>
    </div>
  );
};

const MainPage = (props) => {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temp, setTemp] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [daily, setDaily] = useState(null);
  const [chartData, setChartData] = useState({});
  const api_call = async (e) => {
    e.preventDefault();
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=3960092f469b92d98917ccf6db87f3ba&units=metric";
    const request = axios.get(url);
    const response = await request;
    const current = await response.data.current;
    console.log(response.data);

    setTimezone(response.data.timezone);
    setTemp(current.temp);
    setFeelsLike(current.feels_like);
    setSunrise(current.sunrise);
    setSunset(current.sunset);
    setDaily(response.data.daily);

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
  return (
    <React.Fragment>
      <Modal />
      {showMain && (
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
            }}
          >
            <LeftSide />
            <RightSide />
          </weatherContext.Provider>
        </div>
      )}
    </React.Fragment>
  );
};
export default MainPage;
