import React, { useState, createContext, useEffect } from "react";
import Country from "./components/routes/main/Country";
export const CountriesData = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState();
  const [continentFilter, setcontinentFilter] = useState();
  useEffect(() => {
    async function getCountries() {
      const raw = await fetch("https://restcountries.com/v2/all");
      const data = await raw.json();
      setCountries(data);
    }
    getCountries();
  }, []);
  const filter = (e) => {
    setcontinentFilter(
      countries
        .filter((cntry) => cntry.region === e.target.innerText)
        .map((i) => (
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
    console.log(e.target.innerText);
  };

  return (
    <CountriesData.Provider value={{ countries, filter, continentFilter }}>
      {props.children}
    </CountriesData.Provider>
  );
};
