import { useContext } from "react";
import classes from "./Modal.module.css";
import weatherContext from "../../store/weather-context";

const WarningModal = (props) => {
  const { api_call } = useContext(weatherContext);
  return (
    <form onSubmit={api_call} className={classes.container}>
      <div >make sure you are not using VPN.</div>
      <button onClick={props.onClose}>
        OK!
      </button>
    </form>
  );
};
export default WarningModal;
