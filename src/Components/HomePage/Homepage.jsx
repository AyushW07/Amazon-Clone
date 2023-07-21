import React from "react";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <img
        className={styles.home_img}
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/GW_July/19thJuly/D77911710_IN_WLME_SamsungM_M145G_Launch_tallhero_3000x1200._CB600059344_.jpg"
        alt=""
      />
    </div>
  );
}

export default Homepage;
