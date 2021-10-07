import { React, useContext, useEffect, useState } from "react";
import classes from "./Countries.module.css";
import { CountriesData } from "../../../CountriesData";
import Country from "./Country";
function Countries() {
  const [allCountries, setAllCountries] = useState();
  const [UI, setUI] = useState();
  const {
    countries: data,
    continentFilter,
    searchFilter,
  } = useContext(CountriesData);
  useEffect(() => {
    if (!data) {
      return;
    } else {
      setAllCountries(
        data.map((i) => (
          <Country
            flag={i.flags.svg}
            name={i.name}
            population={i.population}
            region={i.region}
            capital={i.capital}
            key={i.name}
          />
        ))
      );
    }
  }, [data]);

  useEffect(() => {
    if (continentFilter) {
      setUI(continentFilter);
      // console.log(searchFilter);
    } else if (searchFilter) {
      setUI(searchFilter);
    } else {
      setUI(allCountries);
    }
  }, [searchFilter, continentFilter, allCountries]);

  return <div className={classes.countriesContainer}>{UI}</div>;
}
export default Countries;
