import classes from "./RightSide.module.css";
const RightSide = () => {
  return (
    <div className={classes.container}>
        <div>
            <h5 className={classes.top}>
                palces
            </h5>
        </div>
      <div className={classes.detail}>
        <div className={classes.topMain}>
          <h3>Today</h3>
          <h5>sat ,1Aug</h5>
        </div>
        <div className={classes.main}>
          <h1>28</h1>
          <h5>Tehran, Iran</h5>
        </div>
        <div className={classes.underMain}>
          <h5>feels like 32</h5>
          <h5>sunset 20:15</h5>
        </div>
      </div>
      <div className={classes.rainChance}>
        <h3>chance of rain</h3>
        <div>chart</div>
      </div>
    </div>
  );
};
export default RightSide;
