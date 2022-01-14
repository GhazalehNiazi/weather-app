const changeLocation = (state, action) => {
  console.log("its changin the location");
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
  let updatedCurrent;
  let updatedCity;
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      updatedCity = data.timezone;
      return data.current;
    })
    .then(function (current) {
      console.log(current);
      updatedCurrent = current;
    });

  return {
    city: updatedCity,
    current: updatedCurrent,
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
