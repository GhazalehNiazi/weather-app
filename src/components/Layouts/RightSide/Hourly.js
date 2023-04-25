import {Suspense} from "react";
import { CloudIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import classes from "./RightSide.module.css";
import weatherContext from "../../../store/weather-context";
import { useContext } from "react";
import Loader from "../../Pages/Loader";
function Hourly({ className }) {
  const { timezone, temp, feelsLike, sunset, sunrise, hourly, daily } =
    useContext(weatherContext);

  const date = new Date();
  let curHour = date.getHours();
  curHour = +curHour;

  return (
    <Suspense fallback={<Loader />}>
    <div className={clsx(className)}>
    <div className={clsx(classes["hero-top-underline"])}>HOURLY FORCAST</div>
    <div className={clsx(classes["hero-hourly-detail"])}>
    {hourly &&
      hourly.map(
        (hour, index) =>
        index < 25 && (
          <div className={clsx(classes["hero-hourly-single-hour"])}>
          {(index + curHour <= 24) & (curHour + index >= 12) ? (
            <span className={clsx(classes["singlehour-hour"])}>
            {curHour + index - 12}pm
            </span>
            ) : (index + curHour <= 24) & (curHour + index >= 12) ? (
              <span className={clsx(classes["singlehour-hour"])}>
              {curHour + index}am
              </span>
              ) : curHour + index - 24 <= 12 ? (
                <span className={clsx(classes["singlehour-hour"])}>
                {curHour + index - 24}am
                </span>
                ) : curHour + index - 24 >= 12 ? (
                  <span className={clsx(classes["singlehour-hour"])}>
                  {curHour + index - 24}pm
                  </span>
                  ) : (
                    ""
                    )}
                    <img
                    className={clsx(classes["weathericonimg"])}
                    src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt="icon"
                    />
                    <span>{Math.ceil(+hour.temp)}°</span>
                    </div>
                    )
                    )}
                    </div>
                    </div>
                    </Suspense>
                    );
                  }
                  
                  export default Hourly;
                  