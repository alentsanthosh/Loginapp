// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "loginapp-6ef3f.firebaseapp.com",
  projectId: "loginapp-6ef3f",
  storageBucket: "loginapp-6ef3f.appspot.com",
  messagingSenderId: "748135658085",
  appId: "1:748135658085:web:8d382a1385023317888c8c",
  measurementId: "G-29JGKLWYM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
