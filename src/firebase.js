import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2dyVs1AFAx9gZr68TQGFUcOSaKk_AL5M",
  authDomain: "upgr-form.firebaseapp.com",
  projectId: "upgr-form",
  storageBucket: "upgr-form.appspot.com",
  messagingSenderId: "96005806129",
  appId: "1:96005806129:web:de18e1edcba54fd35c9d10",
};

const app = initializeApp(firebaseConfig);

console.log(app);

export const db = getFirestore(app);
