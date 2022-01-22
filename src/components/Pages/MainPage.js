import { useEffect, useState, useContext } from "react/cjs/react.development";
import axios from "axios";
import LeftSide from "../Layouts/LeftSide/LeftSide";
import RightSide from "../Layouts/RightSide/RightSide";
import classes from "./MainPage.module.css";
import weatherContext from "../../store/weather-context";

const MainPage = () => {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temp, setTemp] = useState(null);
  const [timezone, setTimezone] = useState(null);

  // useEffect(()=>{

  const api_call = async (e) => {
    e.preventDefault();
    // const url ="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
    const request = axios.get(url);
    const response = await request;
    const current = await response.data.current;
    console.log(current.temp);

    setTimezone(response.data.timezone);
    setTemp(current.temp);
    setFeelsLike(current.feels_like);
    setSunrise(response.data.sunrise);
    setSunset(response.data.sunset);
  };

  // },[]);

  return (
    <div className={classes.container}>
      <h1>{temp}</h1>
      <weatherContext.Provider
        value={{ api_call, timezone, temp, feelsLike, sunset, sunrise }}
      >
        <LeftSide />
        <RightSide />
      </weatherContext.Provider>
    </div>
  );
};
export default MainPage;

// calling the api
// let componentMounted = true;
// const fetchWeather = async ()=>{
//   if(componentMounted){
//   const response = await fetch(url);
//     setData(await response.json());
//     // console.log(response.json());
//   }
//   return()=>{
//     componentMounted = false
//   }
// }
// fetchWeather();
// if(!componentMounted){
// console.log(data)}

// context.searchForCity({data:data})
// console.log(data);
// console.log(data.timezone) //city name
// setTimeout(()=>
// {console.log(data.timezone) //city name
//   setTimezone(data.timezone);
//   console.log(timezone);
//   console.log(data.current.clouds)
// console.log(data.current.feels_like)
// console.log(data.current.temp)
// }
// ,3000)

// context.searchForCity(data)
