import { React, useContext } from "react";
import classes from "./Country.module.css";
import { Link } from "react-router-dom";
import { CountriesData } from "../../../CountriesData";
function Country(props) {
  const { theme } = useContext(CountriesData);
  const cardTheme = theme === "light" ? "cardLight" : "cardDark";
  const selectedCountryHandler = () => {
    const code = props.code;
    localStorage.setItem("code", code);
  };

  return (
    <Link className={classes.link} to={`/search-result/${props.name}`}>
      <div
        className={`${classes[cardTheme]} ${classes.card}`}
        onClick={selectedCountryHandler}
      >
        <div className={classes.imgContainer}>
          <img className={classes.img} src={props.flag} alt="Flag img" />
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
    </Link>
  );
}
export default Country;
