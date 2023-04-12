import React from "react";
import clsx from "clsx";
import classes from "./RightSide.module.css";
function DetailBox({ mainDetail, subDetail, className, title }) {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx(classes["hero-top-underline"], classes["no-underline"])}
      >
        {title}
      </div>
      <div className={clsx(classes["detailBox"])}>
        <div className={clsx(classes["detailBox-main"])}>{mainDetail}</div>
        <div className={clsx(classes["detailBox-sub"])}>{subDetail}</div>
      </div>
    </div>
  );
}

export default DetailBox;
