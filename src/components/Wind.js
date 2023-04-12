import React from "react";
import { useContext } from "react";
import weatherContext from "../store/weather-context";
import clsx from "clsx";
import Box from "./Layouts/RightSide/Box";

function Wind({ className }) {
  const { winddeg, windspeed } = useContext(weatherContext);

  return (
    <Box className={clsx(className)} title="wind">
      {winddeg && (
        <div>
          {winddeg} {windspeed}
        </div>
      )}
    </Box>
  );
}

export default Wind;
