import { React } from "react";
import classes from "./Country.module.css";

function Country(props) {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={props.flag} />
      </div>
      <div className={classes.detailsContainer}>
        <span className={classes.countryName}>{props.name}</span>
        <div className={classes.details}>
          <span className={classes.span}>
            <p className={classes.p}>Population :</p> {props.population}
          </span>
          <span className={classes.span}>
            <p className={classes.p}>region :</p> {props.region}
          </span>
          <span className={classes.span}>
            <p className={classes.p}>Capital :</p> {props.capital}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Country;
