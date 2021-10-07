import { React, useContext } from "react";
import classes from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CountriesData } from "../../../CountriesData";

function SearchBar() {
  const { searchFilterHandler } = useContext(CountriesData);
  return (
    <div className={classes.searchBar}>
      <AiOutlineSearch className={classes.icon} />
      <input
        placeholder="Search for a country..."
        type="text"
        onChange={searchFilterHandler}
      />
    </div>
  );
}
export default SearchBar;
