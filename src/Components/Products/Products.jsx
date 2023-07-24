import React from "react";
import styles from "./Products.module.css";
import { useStateValue } from "../../StateProvider";

function Products({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  // console.log("This is in the cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={styles.products}>
      <div className={styles.product_info}>
        <p>{title}</p>
        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className={styles.btn} onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Products;
