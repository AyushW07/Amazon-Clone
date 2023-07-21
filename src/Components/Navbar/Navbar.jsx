import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={styles.search_container}>
        <input type="text" className={styles.searchbar} />
        <SearchIcon className={styles.searchIcon} />
      </div>
    </nav>
  );
}

export default Navbar;
