import { React, useContext } from "react";
import classes from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CountriesData } from "../../../CountriesData";

function SearchBar() {
  const { searchFilterHandler, theme } = useContext(CountriesData);
  const searchBarTheme = theme === "light" ? "searchBarLight" : "searchBarDark";
  const iconTheme = theme === "light" ? "iconLight" : "iconDark";
  const inputTheme = theme === "light" ? "inputLight" : "inputDark";
  return (
    <div className={`${classes[searchBarTheme]} ${classes.searchBar}`}>
      <AiOutlineSearch className={classes[iconTheme]} />
      <input
        className={classes[inputTheme]}
        placeholder="Search for a country..."
        type="text"
        onChange={searchFilterHandler}
      />
    </div>
  );
}
export default SearchBar;
