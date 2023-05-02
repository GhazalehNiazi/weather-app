import { useContext } from "react";
import clsx from "clsx";

import DetailBox from "./Layouts/RightSide/DetailBox";
import weatherContext from "../store/weather-context";

function Visibility({ className }) {
  const { visibility } = useContext(weatherContext);
  const visibilityMeters = visibility / 1000;
  let description;

  if (visibilityMeters < 0.03) {
    description = "dense fog";
  } else if (visibilityMeters < 0.16) {
    description = "moderate fog";
  } else if (visibilityMeters < 0.35) {
    description = "light fog";
  } else if (1.08 < visibilityMeters < 2.16) {
    description = "light mist";
  } else if (5.4 < visibilityMeters < 10.8) {
    description = "clear";
  } else if (10.8 < visibilityMeters < 27) {
    description = "perfect clear";
  }
  return (
    <DetailBox
      className={clsx(className)}
      title="visibility"
      mainDetail={`${visibilityMeters} meters `}
      subDetail={description}
    />
  );
}

export default Visibility;
