import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login}>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>

      <div className={styles.container}>
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type="text" placeholder="Enter Email" />

          <h5>Password</h5>
          <input type="password" placeholder="Enter Password" />

          <button className={styles.sign_btn}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's &nbsp;
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
            Conditions of Use
          </a>
          &nbsp; and &nbsp;
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
            Privacy Notice
          </a>
          .
        </p>
        <button className={styles.create_btn}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
