import { useContext } from "react";
import weatherContext from "../../../store/weather-context";
import classes from "./RightSide.module.css";
import clsx from "clsx";
import { WindowIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CloudIcon } from "@heroicons/react/24/solid";
import Hourly from "./Hourly";
import Daily from "./Daily";
import DetailBox from "./DetailBox";
import Uvindex from "../../Uvindex";
import Wind from "../../Wind";
import FeelsLike from "../../FeelsLike";
import Aboutme from "../../Aboutme";
import Visibility from "../../Visibility";
import Precipitation from "../../Precipitation";

const RightSide = ({ show }) => {
  const {
    temp,
    sunrise,
    weather,
    winddeg,
    windspeed,
    humidity,
    dew_point,
    visibility,
    pressure,
    sunset,
  } = useContext(weatherContext);

  return (
    <div className={classes.container}>
      {/*
     <div className={clsx(classes["topbar"])}>
        <WindowIcon width={25} onClick={() => show((prev) => !prev)} />
        <div className={clsx(classes["searchbar"])}>
          <MagnifyingGlassIcon width={25} />
          <input
            type="text"
            placeholder="Search"
            className={clsx(classes["searchbar-input"])}
          ></input>
        </div>
  </div>
*/}

      <div className={clsx(classes["summary"])}>
        <div className={clsx(classes["summary-name"])}>Tehran</div>
        <div className={clsx(classes["summary-temp"])}>{Math.ceil(temp)}</div>
        <div className={clsx(classes["summary-weather"])}>
          {weather[0]?.description}
        </div>

        <div className={clsx(classes["summary-hl"])}>
          <span>L=22°</span>
          <span>H=62°</span>
        </div>
      </div>

      <div className={clsx(classes["hero"])}>
        <Hourly className={clsx(classes["hero-hourly"], classes["box"])} />
        <Daily className={clsx(classes["hero-tenday"], classes["box"])} />
        <Uvindex className={clsx(classes["hero-uv"], classes["box"])} />
        {/*   <Wind className={clsx(classes["hero-wind"], classes["box"])} />*/}
        <DetailBox
          className={clsx(classes["hero-wind"], classes["box"])}
          title="wind"
          mainDetail={`deg: ${winddeg} speed: ${windspeed}`}
        />
        <FeelsLike
          className={clsx(classes["hero-feelslike"], classes["box"])}
        />

        <DetailBox
          className={clsx(classes["hero-sunrise"], classes["box"])}
          title="sunrise"
          mainDetail={new Date(sunrise*1000).toLocaleTimeString("en-US")}
        />
        {/*<Precipitation/>*/}
        <DetailBox
          className={clsx(classes["hero-precipitation"], classes["box"])}
          title="sunset"
          mainDetail={new Date(sunset*1000).toLocaleTimeString("en-US")}
        />
        <DetailBox
          className={clsx(classes["hero-humidity"], classes["box"])}
          title="humidity"
          mainDetail={`${humidity}%`}
          subDetail={`the dew point is ${dew_point} right now`}
        />
        <Aboutme className={clsx(classes["hero-prediction"], classes["box"])} />
        <Visibility
          className={clsx(classes["hero-visibility"], classes["box"])}
        />

        <DetailBox
          className={clsx(classes["hero-pressure"], classes["box"])}
          title="pressure"
          mainDetail={`${pressure} hPa`}
        />
      </div>
    </div>
  );
};
export default RightSide;
