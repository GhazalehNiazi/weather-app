import React from "react";
import DetailBox from "./Layouts/RightSide/DetailBox";
import clsx from "clsx";
import { useContext, useState } from "react";
import weatherContext from "../store/weather-context";
import classes from './Layouts/RightSide/RightSide.module.css'
function FeelsLike({ className }) {
  const { feelsLike } = useContext(weatherContext);


  return (
    <div className={clsx(className)}>
      {feelsLike && (
        <DetailBox
         className={clsx(classes['detailBox'])}
          title="feels like"
          mainDetail={feelsLike ? feelsLike : ""}
          subDetail="wind is making it feel cooler"
        />
      )}
    </div>
  );
}

export default FeelsLike;
