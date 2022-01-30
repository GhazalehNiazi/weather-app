import nyLogo from "../../../assets/ny.jpg";
import franceLogo from "../../../assets/france.jpg";
import dubaiLogo from "../../../assets/dubai.jpg";
import italyLogo from "../../../assets/italy.jpg";
import classes from "./Images.module.css";
const Images = () => {
  return (
    <div className={classes.imgContainer}>
      <div className={classes.image}>
        <img src={nyLogo}></img>
      </div>
      <div className={classes.image}>
        <img src={franceLogo}></img>
      </div>
      <div className={classes.image}>
        <img src={dubaiLogo}></img>
      </div>
      <div className={classes.image}>
        <img src={italyLogo}></img>
      </div>
    </div>
  );
};
export default Images;
