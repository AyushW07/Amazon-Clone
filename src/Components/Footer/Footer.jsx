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
            <li>
              <a href="https://www.aboutamazon.in/">About Us</a>
            </li>
            <li>
              <a href="https://amazon.jobs/en/">Careers</a>
            </li>
            <li>
              <a href="https://press.aboutamazon.in/">Press Releases</a>
            </li>
            <li>
              <a href="https://www.amazon.science/">Amazon Science</a>
            </li>
          </div>

          <div className={styles.title}>
            <h4>Connect with Us</h4>
            <li>
              <a href="https://www.facebook.com/AmazonIN">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/AmazonIN">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/amazondotin/">Instagram</a>
            </li>
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
            <a href="#">
              <img
                className={styles.amazon_logo}
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
          </div>
          <div className={styles.copy}>
            &copy; Amazon Clone 2023 All rights reserved
            <pre />
            <span>by Ayush</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
