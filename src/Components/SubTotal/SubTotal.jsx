import React from "react";
import styles from "./SubTotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

function SubTotal() {
  const [{ cart }, dispatch] = useStateValue();

  // console.log(cart);
  // console.log(getCartTotal(cart));

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.gift}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"\u20B9"}
      />

      <button className={styles.btn}>Proceed to Buy</button>
    </div>
  );
}

export default SubTotal;
