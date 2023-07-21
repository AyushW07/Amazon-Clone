import React from "react";
import styles from "./Products.module.css";

function Products({ id, title, price, rating, image }) {
  return (
    <div className={styles.products}>
      <div className={styles.product_info}>
        <p>{title}</p>
        <p className={styles.product_price}>
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className={styles.btn}>Add To Cart</button>
    </div>
  );
}

export default Products;
