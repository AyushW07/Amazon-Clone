import React from "react";
import styles from "./Payment.module.css";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className={styles.payment}>
      <div className={styles.container}>
        <h1>
          Checkout (<Link to="/cart">{cart?.length} items</Link>)
        </h1>

        <div className={styles.section}>
          <div className={styles.title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles.address}>
            <p>{user?.email}</p>
            <p>Durga Nagar</p>
            <p>Tumsar, MH</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className={styles.items}>
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

        <div className={styles.section}>
          <div className={styles.title}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles.details}></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
