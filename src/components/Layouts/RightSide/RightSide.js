import { useContext, useEffect, useState } from "react";
import weatherContext from "../../../store/weather-context";
import classes from "./RightSide.module.css";
import { ApiCaller } from "../../../Api";

const RightSide = () => {
  const context = useContext(weatherContext);
  //  context.searchForCity();
  // useEffect(()=>context.searchForCity(),context);
  // setTimeout(()=>console.log(context),5000)
  //   const [call , setCall] = useState(true)
  //   if(call){
  //   ApiCaller()
  //    setCall(false);
  // }
  //   const [call , setCall] = useState(true)
  //   if(call){
  //     context.searchForCity();
  //    setCall(false);
  // }
  // let componentMounted = true;
  // let data;
  // console.log("its changin the location");
  // const url =
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
  // useEffect(() => {
  //   console.log("hey1");
  //   const fetchWeather = async () => {
  //     console.log("here");
  //     const response = await fetch(url);
  //     if (componentMounted) {
  //       data = await response.json();
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   fetchWeather();
  // }, []);



  // console.log(data);

  // if (data) {
  //   console.log("it has data");
  // } else {
  //   console.log(" no data");
  // }

  return (
    <div className={classes.container}>
      <div>
        <h5 className={classes.top}>palces</h5>
      </div>
      <div className={classes.detail}>
        <div className={classes.topMain}>
          <h3>Today</h3>
          <h5>sat ,1Aug</h5>
        </div>
        <div className={classes.main}>
          <h1>28</h1>
          <h5>Tehran, Iran</h5>
        </div>
        <div className={classes.underMain}>
          <h5>feels like 32</h5>
          <h5>sunset 20:15</h5>
        </div>
      </div>
      <div className={classes.rainChance}>
        <h3>chance of rain</h3>
        <div>chart</div>
      </div>
    </div>
  );
};
export default RightSide;
