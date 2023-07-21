import React from "react";
import styles from "./SubTotal.module.css";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>{" "}
            </p>
            <small className={styles.gift}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"&#x20B9;"}
      />

      <button className={styles.btn}>Proceed to Buy</button>
    </div>
  );
}

export default SubTotal;
