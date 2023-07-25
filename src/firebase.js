import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPen3apLPs1PU2o1Xa0o7xqczkW1TJ8FQ",
  authDomain: "clone-67d4c.firebaseapp.com",
  projectId: "clone-67d4c",
  storageBucket: "clone-67d4c.appspot.com",
  messagingSenderId: "1038493226694",
  appId: "1:1038493226694:web:01c698fe7f28c1922fe9c7",
  measurementId: "G-T04H60C6NF",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
