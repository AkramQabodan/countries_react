import React from "react";
import classes from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <AiOutlineSearch className={classes.icon} />
      <input placeholder="Search for a country..." />
    </div>
  );
}
export default SearchBar;
