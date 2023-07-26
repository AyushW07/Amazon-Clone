import React, { useState } from "react";
import styles from "./Payment.module.css";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../CartProduct/CartProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../reducer";
import { useEffect } from "react";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const [{ cart, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    // generating a special stripe secret which allows to charge customers
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payment/create?total=${getCartTotal(cart) * 100}`,
      });

      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
      });
  };

  const handleOnChange = (e) => {
    // if e is empty it will disabled the button
    setDisabled(e.empty);
    // if there is error show it, otherwise give empty string
    setError(e.error ? e.error.message : "");
  };

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
          <div className={styles.details}>
            <form onSubmit={handleOnSubmit}>
              <CardElement onChange={handleOnChange} />

              <div className={styles.price}>
                <CurrencyFormat
                  renderText={(value) => <h3>Total Order : {value} </h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"\u20B9"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* If any Error occurs */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
