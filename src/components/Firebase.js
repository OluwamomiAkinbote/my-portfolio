// Import the functions you need from the SDKs you need
// firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOEJNP4o5drC92AzrgdmY9JDYrm8TNXkE",
  authDomain: "maxonex-2cdbb.firebaseapp.com",
  projectId: "maxonex-2cdbb",
  storageBucket: "maxonex-2cdbb.appspot.com",
  messagingSenderId: "595955685499",
  appId: "1:595955685499:web:10d0c0630d9708a3f02ade",
  measurementId: "G-V80Z4XJ73J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
