import { useReducer } from "react";
import weatherContext from "./weather-context";
import { WeatherReducer } from "./Reducer";

const GlobalState = (props) => {
const [state, dispatch] = useReducer(WeatherReducer, {
  city: "",
  current: [],
});

const searchForCity = (city) => {
  dispatch({ type: "ChangeLocation", city: city });
};
  return (
    <weatherContext.Provider
      value={{
        city: state.city,
        current: state.current,
        searchForCity: searchForCity,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
export default GlobalState;