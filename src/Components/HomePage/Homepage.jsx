import React from "react";
import styles from "./Homepage.module.css";
import Products from "../Products/Products";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <img
        className={styles.home_img}
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/GW_July/19thJuly/D77911710_IN_WLME_SamsungM_M145G_Launch_tallhero_3000x1200._CB600059344_.jpg"
        alt=""
      />

      <div className={styles.home_row}>
        <Products
          id="1"
          title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
          price={10}
          rating={5}
          image="	https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL600_FMwebp_QL65_.jpg"
        />

        <Products
          id="2"
          title="ASUS ZenBook 14 (2020) Intel Core i7-1165G7 11th Gen 14 inches FHD Business Laptop (16GB/512GB SSD/Office 2019/Windows 10 Home/Iris Xe Graphics/Pine Grey/1.17 kg)"
          price={75990}
          rating={4}
          image="https://m.media-amazon.com/images/I/71lT-zWEYkL._AC_UL600_FMwebp_QL65_.jpg"
        />
      </div>

      <div className={styles.home_row}>
        <Products
          id="1"
          title="Apple iPhone 14 (128 GB) - Midnight"
          price={66999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL600_FMwebp_QL65_.jpg"
        />

        <Products
          id="2"
          title="Minimalist 2% Salicylic Acid Face Wash For Oily Skin | Sulphate Free, Anti Acne Face Cleanser With Lha & Zinc For Acne Or Pimples | Men & Women 100 Ml"
          price={429}
          rating={5}
          image="https://m.media-amazon.com/images/I/51qpGr-1qzL._AC_UL480_QL65_.jpg"
        />

        <Products
          id="3"
          title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)"
          price={78690}
          rating={5}
          image="	https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      <div className={styles.home_row}>
        <Products
          id="1"
          title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
          price={79999}
          rating={4}
          image="https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Homepage;
