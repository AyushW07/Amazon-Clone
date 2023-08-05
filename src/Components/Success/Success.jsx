import React from "react";
import styles from "./Success.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Success() {
  const handleOnClick = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.success}>
      <main className={styles.container}>
        <div className={styles.outer_container}>
          <div className={styles.inner_container}>
            <CheckCircleIcon className={styles.check_icon} />
            <h3>Thank you, your order has been confirmed.</h3>
          </div>
          <p>
            Your Payment has been confirmed, Thank you for shopping with us.
          </p>
          <button className={styles.btn} onClick={handleOnClick}>
            Go to Homepage
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
