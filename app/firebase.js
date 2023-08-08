import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCgUi7bnfrIpjsg6bOzTrPln36TAUZwatI",
  authDomain: "projectx-9.firebaseapp.com",
  projectId: "projectx-9",
  storageBucket: "projectx-9.appspot.com",
  messagingSenderId: "250878981952",
  appId: "1:250878981952:web:e1c534802f1ca0fcd9aca5",
  measurementId: "G-LQSR7GQL7R",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
