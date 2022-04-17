// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF9PZhW7iHqnSPnHE9IvXGsw5bNWdRhbc",
  authDomain: "john-s-dental-world.firebaseapp.com",
  projectId: "john-s-dental-world",
  storageBucket: "john-s-dental-world.appspot.com",
  messagingSenderId: "371862127637",
  appId: "1:371862127637:web:095aa2c8072feb4ec4ba1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
