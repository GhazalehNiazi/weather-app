const changeLocation = (state, action) => {
  console.log("===reducer===");
  console.log("state", state);
  console.log("action", action);

  return {
    item: state.item,

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
