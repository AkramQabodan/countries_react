import { React, useContext } from "react";
import { FaMoon } from "react-icons/fa";
import classes from "./Nav.module.css";
import { CountriesData } from "../CountriesData";
function Nav() {
  const { theme, setTheme } = useContext(CountriesData);
  const themeHandler = () => {
    if (theme === "light") {
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("mode", "light");
      setTheme("light");
    }
  };
  const navTheme = theme === "light" ? "navLight" : "navDark";
  const titleTheme = theme === "light" ? "titleLight" : "titleDark";
  const darkModeOptionTheme =
    theme === "light" ? "darkModeOptionLight" : "darkModeOptionDark";
  const iconTheme = theme === "light" ? "iconLight" : "iconDark";

  return (
    <div className={`${classes[navTheme]} ${classes.nav}`}>
      <span className={`${classes[titleTheme]} ${classes.title}`}>
        Where in the world?
      </span>
      <div
        onClick={themeHandler}
        className={`${classes[darkModeOptionTheme]} ${
          classes[`dark-mode-option`]
        }`}
      >
        <FaMoon className={`${classes[iconTheme]} ${classes.icon}`} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Nav;
