const changeLocation = (state, action) => {
  console.log("its changin the location");
  const url =''
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
