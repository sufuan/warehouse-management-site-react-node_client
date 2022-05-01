// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  apiKey: "AIzaSyB0JnydSIKrtFJ4p6QurIvxBdZTzzLlIYU",
  authDomain: "sohojbook-8d196.firebaseapp.com",
  projectId: "sohojbook-8d196",
  storageBucket: "sohojbook-8d196.appspot.com",
  messagingSenderId: "268579786569",
  appId: "1:268579786569:web:75cd7f6e2524f5675e5498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

 export default app



