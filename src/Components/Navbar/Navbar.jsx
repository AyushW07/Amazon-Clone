import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Navbar() {
  const [{ cart, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.navbar_up}>
        <Link to="/homepage">
          <img
            className={styles.logo}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        <Link to="/homepage">
          <div className={styles.location}>
            <LocationOnOutlinedIcon />
            <div className={styles.address}>
              <h5>Select your Address</h5>
            </div>
          </div>
        </Link>

        <div className={styles.search_container}>
          <select>
            <option>All</option>
            <option>Mobiles</option>
            <option>Appliances</option>
            <option>Books</option>
            <option>Clothing</option>
            <option>Electronics</option>
          </select>

          <input
            type="text"
            className={styles.searchbar}
            placeholder="Search..."
          />
          <SearchIcon className={styles.searchIcon} />
        </div>

        <div className={styles.links}>
          <Link to="/homepage" className={styles.linktag}>
            <div className={styles.language}>
              <img
                className={styles.flag}
                src="https://th.bing.com/th?id=ODL.50621a9fe6760d660c85d306d770f45c&w=298&h=204&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&dpr=1.3&pid=13.1"
                alt="Indian"
              />
              <select>
                <option>En</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Tamil</option>
                <option>Gujrati</option>
              </select>
            </div>
          </Link>

          <Link to={!user && "/"} className={styles.linktag}>
            <div onClick={handleAuth} className={styles.links_options}>
              <span className={styles.line1}>
                Hello, {!user ? "Guest" : user.email}
              </span>
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

          <Link to="/cart" className={styles.linktag}>
            <div className={styles.cart}>
              <ShoppingCartIcon />
              <span className={styles.cart_count}>{cart?.length}</span>
            </div>
          </Link>
        </div>
      </nav>

      <nav className={styles.navbar_down}>
        <ul>
          <li className={styles.menu_all} onClick={handleMenu}>
            <MenuIcon className={styles.menu_icon} />
            All
          </li>
          <li>
            <a href="https://www.amazon.in/minitv" target="_blank">
              Amazon miniTV
            </a>
          </li>
          <li>Sell</li>
          <li>Amazon Pay</li>
          <li>Gift Cards</li>
          <li>Buy Again</li>
          <li>Gift Ideas</li>
          <li>Health, Household & Personal Care</li>
          <li>Coupons</li>
          <li>AmazonBasics</li>
        </ul>
      </nav>

      <div className={isOpen ? styles.black : ""}>
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
          <CloseIcon className={styles.close_icon} onClick={handleMenu} />
          <div className={styles.ext_container}>
            <div className={styles.users}>
              <AccountCircleIcon className={styles.users_icon} />
              Hello, {!user ? "Guest" : user.email}
            </div>

            <div className={styles.container}>
              <div className={styles.content}>
                <h3>Trending</h3>
                <ul>
                  <li>Best Seller</li>
                  <li>New Releases</li>
                  <li>Movers and Shakers</li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3>Digital Content And Devices</h3>
                <ul>
                  <li>
                    Echo & Alexa
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Fire TV{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Kindle E-Readers & eBooks{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Audible Audiobooks{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Amazon Prime Video{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Amazon Prime Music{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3>Shop By Category</h3>
                <ul>
                  <li>
                    Mobiles, Computers{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    TV, Appliances, Electronics{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Men's Fashion{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>
                    Women's Fashion{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>See All</li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3>Programs & Features</h3>
                <ul>
                  <li>
                    Gift Cards & Mobile Recharges{" "}
                    <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
                  </li>
                  <li>Amazon Launchpad</li>
                  <li>Flight Tickets</li>
                  <li>Clearance store</li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3>Help & Settings</h3>
                <ul>
                  <li>Your Account</li>
                  <li>Customer Service</li>
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
