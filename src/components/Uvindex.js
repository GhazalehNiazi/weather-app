import clsx from "clsx";
import classes from "./Layouts/RightSide/RightSide.module.css";
import { useContext } from "react";
import weatherContext from "../store/weather-context";
import Box from "./Layouts/RightSide/Box";
import { useState } from "react";
import { useEffect } from "react";
import sunIcon from "../assets/sunIcon.svg";
function Uvindex({ className }) {
  const { uvi } = useContext(weatherContext);
  const [uvCat, setUvcat] = useState("");

  useEffect(() => {
    if (uvi != null) {
      if (uvi <= 2) setUvcat("low");
      else if (3 >= uvi >= 5) setUvcat("moderate");
      else if (6 >= uvi >= 7) setUvcat("high");
      else if (8 >= uvi >= 10) setUvcat(" very high");
      else if (11 >= uvi) setUvcat("extreme");
    }
  }, [uvi]);

  return (
    <Box className={clsx(className)} title={"uv index"} icon={sunIcon}>
      {uvi && (
        <div>
          <div className={clsx(classes["detailBox-main"])}>{uvi}</div>
          <div className={clsx(classes["detailBox-main"])}> {uvCat} </div>
          <div>
            <input
              className={clsx(classes["uvinput"])}
              type="range"
              value={uvi}
              min="0"
              max="11"
            />
          </div>
        </div>
      )}
    </Box>
  );
}

export default Uvindex;
