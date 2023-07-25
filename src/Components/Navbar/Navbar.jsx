import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [{ cart, user }, dispatch] = useStateValue();

  const [userId, setUserId] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUserId(currentUser);
  });

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/homepage">
        <img
          className={styles.logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={styles.search_container}>
        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search..."
        />
        <SearchIcon className={styles.searchIcon} />
      </div>

      <div className={styles.navbar_links}>
        <Link to={!user && "/"} className={styles.linktag}>
          <div onClick={handleAuth} className={styles.links_options}>
            <span className={styles.line1}>Hello, {userId.email}</span>
            <span className={styles.line2}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/homepage" className={styles.linktag}>
          <div className={styles.links_options}>
            <span className={styles.line1}>Returns</span>
            <span className={styles.line2}>& Orders</span>
          </div>
        </Link>

        <Link to="/homepage" className={styles.linktag}>
          <div className={styles.links_options}>
            <span className={styles.line1}>Your</span>
            <span className={styles.line2}>Prime</span>
          </div>
        </Link>

        <Link to="/cart" className={styles.linktag}>
          <div className={styles.cart}>
            <ShoppingCartIcon />
            <span className={styles.cart_count}>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
