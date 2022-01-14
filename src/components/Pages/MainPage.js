import LeftSide from "../Layouts/LeftSide/LeftSide";
import RightSide from "../Layouts/RightSide/RightSide";
import classes from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.container}>
      <LeftSide/>
      <RightSide/>
    </div>
  );
};
export default MainPage;
