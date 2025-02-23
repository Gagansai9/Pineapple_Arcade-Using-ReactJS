import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC54euPGXRx-mj6VtiJQ2QIWlFPAnaLH2A",
    authDomain: "login-with-firebase-be20e.firebaseapp.com",
    projectId: "login-with-firebase-be20e",
    storageBucket: "login-with-firebase-be20e.appspot.com",
    messagingSenderId: "576172751156",
    appId: "1:576172751156:web:a243e868294ac8e6570d61"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};