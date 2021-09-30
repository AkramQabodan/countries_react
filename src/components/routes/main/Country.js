import { React } from "react";
import classes from "./Country.module.css";
import flag from "./imgs/Egypt.png";
function Country() {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={flag} />
      {/* <div className={classes.imgContainer}></div> */}
      <div className={classes.detailsContainer}>
        <span className={classes.countryName}>Egypt</span>
        <div className={classes.details}>
          <span className={classes.span}>
            <p className={classes.p}>Population :</p> 100,000,000
          </span>
          <span className={classes.span}>
            <p className={classes.p}>region :</p> Africa
          </span>
          <span className={classes.span}>
            <p className={classes.p}>Capital :</p> Cairo
          </span>
        </div>
      </div>
    </div>
  );
}
export default Country;
