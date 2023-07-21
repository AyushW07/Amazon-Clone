import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

      <div className={styles.navbar_links}>
        <Link to="/login" className={styles.linktag}>
          <div className={styles.links_options}>
            <span className={styles.line1}>Hello, Ayush</span>
            <span className={styles.line2}>Sign In</span>
          </div>
        </Link>

        <Link to="/" className={styles.linktag}>
          <div className={styles.links_options}>
            <span className={styles.line1}>Returns</span>
            <span className={styles.line2}>& Orders</span>
          </div>
        </Link>

        <Link to="/" className={styles.linktag}>
          <div className={styles.links_options}>
            <span className={styles.line1}>Your</span>
            <span className={styles.line2}>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className={styles.linktag}>
          <div className={styles.cart}>
            <ShoppingCartIcon />
            <span className={styles.cart_count}>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
