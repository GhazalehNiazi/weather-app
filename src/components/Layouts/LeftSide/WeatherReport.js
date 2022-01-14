import classes from './WeatherReport.module.css';

const WeatherReport=()=>{
return(
    <div>
        <div className={classes.timeDeclation}>
            <div>Week</div>
            <div>Month</div>
            <div>3 month</div>
            <div>6 month</div>
        </div>
        <div className={classes.weekDays} >
            <div >Saturday</div>
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
        </div>
    </div>
)
}
export default WeatherReport;