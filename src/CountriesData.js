import React, { useState, createContext, useEffect } from "react";
import Country from "./components/routes/main/Country";
export const CountriesData = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState();
  const [continentFilter, setcontinentFilter] = useState();
  const [searchFilter, setSearchFilter] = useState();

  function titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  useEffect(() => {
    async function getCountries() {
      const raw = await fetch("https://restcountries.com/v2/all");
      const data = await raw.json();
      setCountries(data);
    }
    getCountries();
  }, []);

  const filter = (event) => {
    setcontinentFilter(
      countries
        .filter((country) => country.region === event.target.innerText)
        .map((country, index) => (
          <Country
            flag={country.flags.svg}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={index}
            code={country.cioc}
          />
        ))
    );
  };

  const searchFilterHandler = (event) => {
    setcontinentFilter("");
    setSearchFilter(
      countries
        .filter((country) =>
          country.name.includes(titleCase(event.target.value))
        )
        .map((country, index) => (
          <Country
            flag={country.flags.svg}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={index}
            code={country.cioc}
          />
        ))
    );
  };

  return (
    <CountriesData.Provider
      value={{
        countries,
        filter,
        continentFilter,
        searchFilterHandler,
        searchFilter,
      }}
    >
      {props.children}
    </CountriesData.Provider>
  );
};
