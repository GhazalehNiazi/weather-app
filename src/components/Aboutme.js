import React from "react";
import clsx from "clsx";
import {
  SparklesIcon,
  LinkIcon,
  PhoneIcon,
  UserIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import classes from "./Layouts/RightSide/RightSide.module.css";
function Aboutme({ className }) {
  return (
    <div className={clsx(className, classes["aboutme"])}>
      <div
        className={clsx(classes["hero-top-underline"], classes["no-underline"])}
      >
        <SparklesIcon width={20} color="rgba(255, 209, 0, 1)" />
        <div className={clsx(classes["title"])}> About me</div>
      </div>
      <div className={clsx(classes["usericon"])}>
        <UserIcon width={150} />
      </div>
      <div>
        Hi; <br />
        I'm Ghazale Niazi.
        <br /> this project was inspired by weather app in apple devices.
      </div>
      <div>
        <PhoneIcon width={20} color="rgb(10, 160, 110)" />
        <div>09101714231</div>
      </div>
      <div>
        <InboxIcon width={20} color="#EC6E4C" />
        <div>GhazaleNiaziSabet02@gmail.com</div>
      </div>
      <a
        className={clsx(classes["link"])}
        href="https://github.com/GhazalehNiazi/weather-app"
        target="_blank"
      >
        <LinkIcon width={20} color="rgb(21, 165, 255)" />
        <div> github repository</div>
      </a>
    </div>
  );
}

export default Aboutme;
