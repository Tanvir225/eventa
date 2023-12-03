// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wATLHD2Vh3n-Jisr20-dSaRbslaYfh4",
  authDomain: "eventa-8035f.firebaseapp.com",
  projectId: "eventa-8035f",
  storageBucket: "eventa-8035f.appspot.com",
  messagingSenderId: "460219402600",
  appId: "1:460219402600:web:a813019760e1bf1a2d6edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;