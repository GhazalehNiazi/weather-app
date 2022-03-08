import { useContext } from "react";
import classes from "./Modal.module.css";
import weatherContext from "../../store/weather-context";

const WarningModal = (props) => {
  const { api_call } = useContext(weatherContext);
  return (
    <div className={classes.container}>
    <form onSubmit={api_call} >
      <div >make sure you are not using VPN.</div>
      <button onClick={props.onClose}>
        OK!
      </button>
      </form>
      </div>
  );
};
export default WarningModal;
