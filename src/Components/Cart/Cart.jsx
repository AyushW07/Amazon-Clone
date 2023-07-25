import React from "react";
import styles from "./Cart.module.css";
import SubTotal from "../SubTotal/SubTotal";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../CartProduct/CartProduct";

function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className={styles.cart}>
      <div className={styles.cart_left}>
        <div>
          <h2>Your Shopping Cart</h2>

          {cart.map((item) => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className={styles.cart_right}>
        <SubTotal />
      </div>
    </div>
  );
}

export default Cart;
