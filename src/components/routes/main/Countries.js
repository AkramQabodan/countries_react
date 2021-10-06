import { React, useContext, useEffect, useState } from "react";
import classes from "./Countries.module.css";
import { CountriesData } from "../../../CountriesData";
import Country from "./Country";
function Countries() {
  const [UI, setUI] = useState();
  const { countries: data, continentFilter } = useContext(CountriesData);
  useEffect(() => {
    if (!data) {
      return;
    } else {
      setUI(
        data.map((i) => (
          <Country
            flag={i.flags.svg}
            name={i.name}
            population={i.population}
            region={i.region}
            capital={i.capital}
            key={Math.random()}
          />
        ))
      );
    }
  }, [data]);

  return (
    <div className={classes.countriesContainer}>
      {continentFilter ? continentFilter : UI}
    </div>
  );
}
export default Countries;
