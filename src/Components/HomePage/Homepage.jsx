import React from "react";
import styles from "./Homepage.module.css";
import Products from "../Products/Products";
import Carousal from "../Carousal/Carousal";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Carousal />

      <div className={styles.home_row}>
        <Products
          id="1"
          title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
          price={999}
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
          id="3"
          title="Apple iPhone 14 (128 GB) - Midnight"
          price={66999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL600_FMwebp_QL65_.jpg"
        />

        <Products
          id="4"
          title="Minimalist 2% Salicylic Acid Face Wash For Oily Skin | Sulphate Free, Anti Acne Face Cleanser With Lha & Zinc For Acne Or Pimples | Men & Women 100 Ml"
          price={429}
          rating={5}
          image="https://m.media-amazon.com/images/I/51qpGr-1qzL._AC_UL480_QL65_.jpg"
        />

        <Products
          id="5"
          title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)"
          price={78690}
          rating={5}
          image="	https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      <div className={styles.home_row}>
        <Products
          id="6"
          title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
          price={79999}
          rating={4}
          image="https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UY218_.jpg"
        />
      </div>

      <div className={styles.home_row}>
        <Products
          id="7"
          title="eCraftIndia Golden Handcrafted Palm Buddha Polyresin Showpiece (12.5 cm x 7.5 cm x 17.5 cm, Black)"
          price={399}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Be4kSa6AL._AC_SR400,600_.jpg"
        />

        <Products
          id="8"
          title="ZEBRONICS-Transformer-M with a High-Performance Gold-Plated USB Mouse: 6 Buttons, Multi-Color LED Lights,High-Resolution Sensor with max 3600 DPI, and DPI Switch(Black)"
          price={499}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tioCUVf4L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className={styles.home_row}>
        <Products
          id="9"
          title="Apex 27 LTR Laptop Backpack for 15.6 inch Laptop and Polyester Water Resistance Backpack for Men and Women- Grey"
          price={2999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71miPegpaOL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Products
          id="10"
          title="Van Heusen - Men's Cotton Chequered Slim Fit Formal Shirt"
          price={979}
          rating={4}
          image="	https://m.media-amazon.com/images/I/71klJy9FuRL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Products
          id="11"
          title="Peter England Men Blazer Cotton Chequered Slim Fit Formal"
          price={2699}
          rating={5}
          image="	https://m.media-amazon.com/images/I/41Dwn-isdcL._AC._SR360,460.jpg"
        />
        <Products
          id="11"
          title="OORA Men's Poly Viscose V-Shape Tuxedo Style Waistcoat"
          price={1999}
          rating={4}
          image="	https://m.media-amazon.com/images/I/61kwbxcaVjL._AC._SR360,460.jpg"
        />
      </div>
    </div>
  );
}

export default Homepage;
