// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtkVcROs4o087pTx6DX1Uxxr15Mzrkr5E",
  authDomain: "react-todo-app-b0da5.firebaseapp.com",
  projectId: "react-todo-app-b0da5",
  storageBucket: "react-todo-app-b0da5.appspot.com",
  messagingSenderId: "313994034462",
  appId: "1:313994034462:web:d994574bd22c4504dddd0f",
  measurementId: "G-PSQ5XZZ7JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);