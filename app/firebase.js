import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBrfRe_5lCUkDOQSjIkDNfGF3SqZzSUlew",
  authDomain: "e-care-0.firebaseapp.com",
  projectId: "e-care-0",
  storageBucket: "e-care-0.appspot.com",
  messagingSenderId: "983543880417",
  appId: "1:983543880417:web:aeae17278a6b757f3075a0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
