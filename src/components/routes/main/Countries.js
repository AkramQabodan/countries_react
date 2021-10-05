import { React, useState, useEffect } from "react";
import classes from "./Countries.module.css";
import Country from "./Country";
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(async () => {
    const raw = await fetch("https://restcountries.com/v2/all");
    const data = await raw.json();
    setCountries(data);
  }, []);
  const UI = countries.map((i) => (
    <Country
      flag={i.flags.svg}
      name={i.name}
      population={i.population}
      region={i.region}
      capital={i.capital}
      key={Math.random()}
    />
  ));
  return <div className={classes.countriesContainer}>{UI}</div>;
}
export default Countries;
