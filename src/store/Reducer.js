

const changeLocation = (state, action) => {

console.log('===reducer===');
console.log('state', state);
  console.log('action',action);
  // console.log("its changin the location");
  // const url ="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
  // let updatedCurrent;
  // let updatedCity;
  
  // fetch(url)
  //   .then(function (response) {
    //     console.log(response);
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     updatedCity = data.timezone;
  //     return data.current;
  //   })
  //   .then(function (current) {
    //     console.log(current);
    //     updatedCurrent = current;
    //   })
    
    // const updatedItem = action.item;
    
  // let data;
  // console.log("its changin the location");
  // const url =
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
//   let updatedCurrent;
//   let updatedCity;

  // let componentMounted = true;

  // if (data) {
  //   console.log("it has data");
  // } else {
  //   console.log(" no data");
  // }

  // // useEffect(() => {
  //     console.log('hey1');
  //   const fetchWeather = async () => {
  //       console.log('here');
  //     const response = await fetch(url);
  //     if (componentMounted) {
  //     data = await response.json();
  //     }
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   fetchWeather();
  // // }, []);

  // console.log(data);

  // if (data) {
  //   console.log("it has data");
  // } else {
  //   console.log(" no data");
  // }
  return {
    item:state.item,
    // item: data,
    // city: updatedCity,
    // current: updatedCurrent,
    city: state.city,
    current: state.current,
  };
};

export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "ChangeLocation":
      return changeLocation(state, action);
    default:
      return state;
  }
};
