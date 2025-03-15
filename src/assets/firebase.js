// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your_API_KEY",
  authDomain: "login-with-firebase-be20e.firebaseapp.com",
  projectId: "login-with-firebase-be20e",
  storageBucket: "login-with-firebase-be20e.appspot.com",
  messagingSenderId: "576172751156",
  appId: "1:576172751156:web:a243e868294ac8e6570d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

