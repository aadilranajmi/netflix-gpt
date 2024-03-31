// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM_N4OZh32ssDeFTudkFvNG53x4vKVSuM",
  authDomain: "netlfixgpt-f1ad4.firebaseapp.com",
  projectId: "netlfixgpt-f1ad4",
  storageBucket: "netlfixgpt-f1ad4.appspot.com",
  messagingSenderId: "248850658259",
  appId: "1:248850658259:web:6b536d31efa0bb35f5f526",
  measurementId: "G-K175GHNRNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
