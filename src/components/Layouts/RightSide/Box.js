import clsx from "clsx";
import classes from "./RightSide.module.css";
import sunIcon from '../../../assets/sunIcon.svg';

function Box({ title, children, className, icon }) {

  return (
    <div className={clsx(className, classes["box"])}>
      <div
        className={clsx(classes["hero-top-underline"], classes["no-underline"])}
      >
        {icon ? <img src={sunIcon} alt='icon'/>: ''} {title}
      </div>
      {children}
    </div>
  );
}

export default Box;
