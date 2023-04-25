import React from "react";
import { CloudIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import classes from "./RightSide.module.css";
import weatherContext from "../../../store/weather-context";
import { useContext } from "react";

function Daily({ className }) {
  const { timezone, temp, feelsLike, sunset, sunrise, hourly, daily } =
    useContext(weatherContext);
  const date = new Date();
  let dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );

  return (
    <div className={clsx(className)}>
      <div className={clsx(classes["hero-top-underline"])}>8-DAY FORCAST</div>
      <div className={clsx(classes["hero-daily-detail"])}>
        {daily &&
          daily.map(
            (day, index) =>
              index < 8 && (
                <div className={clsx(classes["hero-daily-single-day"])}>
                  <div>
                    {index === 0
                      ? "today"
                      : index < 7
                      ? Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                        }).format(date.setDate(date.getDate() + index))
                      : index < 8
                      ? Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                        }).format(date.setDate((index + 8) % 7))
                      : ""}
                  </div>
                  <div className={clsx(classes["daily-watherIcon"])}>
                    <img
                      className={clsx(classes["weathericonimg"])}
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                    {day.rain ? <div> {Math.ceil(day.rain)}% </div> : ""}
                  </div>
                  <div className={clsx(classes["dailyweather-minmax"])}>
                    <span className={clsx(classes["daily-mintep"])}>
                      {Math.ceil(day.temp.min)}°
                    </span>
                    <input
                      className={clsx(classes["minmaxinput"])}
                      type="range"
                      value="4"
                      min="0"
                      max="11"
                    />
                    <span>{Math.ceil(day.temp.max)}°</span>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default Daily;
