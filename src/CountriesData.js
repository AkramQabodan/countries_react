import React, { useState, createContext, useEffect } from "react";
import Country from "./components/routes/main/Country";
import { buttonHandler } from "./components/routes/main/Continent";
export const CountriesData = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState();
  const [continentFilter, setcontinentFilter] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [theme, setTheme] = useState();
  const [showContinent, setShowContinent] = useState(false);
  const choice = localStorage.getItem("mode");
  useEffect(() => {
    if (!choice) {
      localStorage.setItem("mode", "light");
      setTheme("light");
    } else if (choice === "dark") {
      setTheme("dark");
    } else if (choice === "light") {
      setTheme("light");
    }
  }, [choice]);

  function titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  const getCountries = async () => {
    const raw = await fetch("https://restcountries.com/v3.1/all");
    const data = await raw.json();
    setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);

  const filter = (event) => {
    setShowContinent(false);
    setcontinentFilter(
      countries
        .filter((country) => country.region === event.target.innerText)
        .map((i, index) => (
          <Country
            flag={i.flags.svg}
            name={i.name.common}
            population={i.population}
            region={i.region}
            capital={i.capital}
            key={index}
            code={i.cioc || i.cca3}
          />
        ))
    );
  };

  const searchFilterHandler = (event) => {
    setcontinentFilter("");
    setSearchFilter(
      countries
        .filter((country) =>
          country.name.common.includes(titleCase(event.target.value))
        )
        .map((i, index) => (
          <Country
            flag={i.flags.svg}
            name={i.name.common}
            population={i.population}
            region={i.region}
            capital={i.capital}
            key={index}
            code={i.cioc || i.cca3}
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
        theme,
        setTheme,
        showContinent,
        setShowContinent,
      }}
    >
      {props.children}
    </CountriesData.Provider>
  );
};
