import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <a href="#">
        <div className={styles.back}>
          <h4>Back To Top</h4>
        </div>
      </a>

      <div className={styles.footer}>
        <div className={styles.footer_up}>
          <div className={styles.title}>
            <h4>Get to Know Us</h4>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </div>

          <div className={styles.title}>
            <h4>Connect with Us</h4>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </div>

          <div className={styles.title}>
            <h4>Make Money with Us</h4>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Press Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </div>

          <div className={styles.title}>
            <h4>Let Us Help You</h4>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Amazon 100% Purchase Protection</li>
            <li>Returns Amazon App Download</li>
            <li>Help</li>
          </div>
        </div>

        <div className={styles.footer_down}>
          <div className={styles.logo}>
            <img
              className={styles.amazon_logo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </div>
          <div className={styles.copy}>
            &copy; 2023 All rights reserved. <pre />
            <span>Amazon Clone by Ayush</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
