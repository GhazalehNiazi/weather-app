import React from "react";
import { useContext, useEffect } from "react";
import weatherContext from "../store/weather-context";
function Precipitation() {
  const { daily } = useContext(weatherContext);

  const dailypob = [];

  useEffect(() => {
    daily?.map((day) => {
      daily.push(day.pob);
      console.log(day?.pob);
    });
    console.log(dailypob);
  }, []);


  return <div>Precipitation</div>;
}

export default Precipitation;
