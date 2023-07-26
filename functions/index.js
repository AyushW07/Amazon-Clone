// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NY6yTSAjCiTrzP0wD9lQX6FpREK08SbriXrHHHSTo4fAgtEyNfnFKhdLGFuXUlugnCw0Key50kYTQGRrRvtUA4V00UqJDJQWP"
);

const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201);
  res.send({ clientSecret: paymentIntent.client_secret });
});

// Listen Command
exports.api = functions.https.onRequest(app);
