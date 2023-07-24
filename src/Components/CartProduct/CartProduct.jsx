import React from "react";
import styles from "./CartProduct.module.css";
import { useStateValue } from "../../StateProvider";

function CartProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className={styles.CartProduct}>
      <img src={image} className={styles.product_image} />

      <div className={styles.product_info}>
        <p className={styles.product_title}>{title}</p>
        <p className={styles.product_price}>
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className={styles.btn} onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
