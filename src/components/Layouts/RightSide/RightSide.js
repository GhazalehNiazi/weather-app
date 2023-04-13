import { useContext, useState } from "react";
import weatherContext from "../../../store/weather-context";
import { weekDays, months } from "../../helper/year";
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
const RightSide = ({ show }) => {
  const { timezone, temp, feelsLike, sunset, sunrise, weather } =
    useContext(weatherContext);

  return (
    <div className={classes.container}>
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

      <div className={clsx(classes["summary"])}>
        <div className={clsx(classes["summary-name"])}>Tehran</div>
        <div className={clsx(classes["summary-temp"])}>{Math.ceil(temp)}</div>
        <div className={clsx(classes["summary-weather"])}>
          {weather[0]?.description}
        </div>
        <div className={clsx(classes["summary-hl"])}>
          <span>L=22° </span>
          <span>H=62°</span>
        </div>
      </div>

      <div className={clsx(classes["hero"])}>
        <Hourly className={clsx(classes["hero-hourly"], classes["box"])} />
        <Daily className={clsx(classes["hero-tenday"], classes["box"])} />
        <Uvindex className={clsx(classes["hero-uv"], classes["box"])} />
        <Wind className={clsx(classes["hero-wind"], classes["box"])} />
        <FeelsLike
          className={clsx(classes["hero-feelslike"], classes["box"])}
        />

        <div className={clsx(classes["hero-sunrise"], classes["box"])}>
          sunrise
        </div>
        <DetailBox
          className={clsx(classes["hero-precipitation"], classes["box"])}
          title="precipitation"
          mainDetail="0 in the last 24 hour"
          subDetail="next expected is .2 rain thu"
        />
        <DetailBox
          className={clsx(classes["hero-humidity"], classes["box"])}
          title="humidity"
          mainDetail="43%"
          subDetail="the dew point is 35 right now"
        />
        <Aboutme className={clsx(classes["hero-prediction"], classes["box"])}>
          prediction
        </Aboutme>
        <DetailBox
          className={clsx(classes["hero-visibility"], classes["box"])}
          title="visibility"
          mainDetail="13mi"
          subDetail="its perfect clear now"
        />
        <div className={clsx(classes["hero-pressure"], classes["box"])}>
          pressure
        </div>
      </div>
    </div>
  );
};
export default RightSide;
