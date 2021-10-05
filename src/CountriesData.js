import React, { useState, createContext, useEffect } from "react";

export const CountriesData = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState();
  useEffect(async () => {
    const raw = await fetch("https://restcountries.com/v2/all");
    const data = await raw.json();
    setCountries(data);
  }, []);
  return (
    <CountriesData.Provider value={countries}>
      {props.children}
    </CountriesData.Provider>
  );
};
