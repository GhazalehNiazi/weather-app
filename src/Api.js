import { useContext } from "react";
import weatherContext from "./store/weather-context";
// import { WeatherReducer } from "./store/Reducer";
import { useEffect, useState } from "react/cjs/react.development";

export const ApiCaller = () => {
  const context = useContext(weatherContext);
  console.log(context);
  console.log("its changin the location");
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
//   let updatedCurrent;
//   let updatedCity;
  const [data, setData] = useState();
  let componentMounted = true;

  if (data) {
    console.log("it has data");
  } else {
    console.log(" no data");
  }

  useEffect(() => {
      console.log('hey1');
    const fetchWeather = async () => {
        console.log('here');
      const response = await fetch(url);
      if (componentMounted) {
        setData(await response.json());
        const data = await response.json();
        console.log(data);
        console.log("hey");
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, []);

  if (data) {
    console.log("it has data");
  } else {
    console.log(" no data");
  }
};
