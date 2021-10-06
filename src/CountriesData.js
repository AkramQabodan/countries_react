import React, { useState, createContext, useEffect } from "react";
import Country from "./components/routes/main/Country";

export const CountriesData = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState();
  const [UI, setUI] = useState();
  useEffect(() => {
    async function getCountries() {
      const raw = await fetch("https://restcountries.com/v2/all");
      const data = await raw.json();
      setCountries(data);
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
    getCountries();
  }, []);

  return (
    <CountriesData.Provider value={{ countries, UI }}>
      {props.children}
    </CountriesData.Provider>
  );
};
