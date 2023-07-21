import React from "react";
import styles from "./Cart.module.css";
import SubTotal from "../SubTotal/SubTotal";

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_left}>
        <div>
          <h2 className={styles.cart_title}>Your Shopping Cart</h2>
        </div>
      </div>

      <div className={styles.cart_right}>
        <SubTotal />
      </div>
    </div>
  );
}

export default Cart;
