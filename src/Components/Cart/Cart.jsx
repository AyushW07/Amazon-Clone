import React from "react";
import styles from "./Cart.module.css";
import SubTotal from "../SubTotal/SubTotal";
import { useStateValue } from "../../StateProvider";

function Cart() {
  const { cart } = useStateValue;

  return (
    <div className={styles.cart}>
      <div className={styles.cart_left}>
        {cart?.length === 0 ? (
          <div>
            <h2 className={styles.cart_title}>Your Shopping Cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Cart</h2>
          </div>
        )}
      </div>

      <div className={styles.cart_right}>
        <SubTotal />
      </div>
    </div>
  );
}

export default Cart;
