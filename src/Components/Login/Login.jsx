import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (auth) {
        navigate("/homepage");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (auth) {
        navigate("/homepage");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.login}>
      <Link to="/homepage">
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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          <button className={styles.sign_btn} type="submit" onClick={signin}>
            Sign In
          </button>
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
        <button onClick={register} className={styles.create_btn}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
