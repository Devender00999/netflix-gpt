// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "./constants";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

console.log(FIREBASE_API_KEY);
const firebaseConfig = {
   apiKey: FIREBASE_API_KEY,
   authDomain: "netflixgpt-d7134.firebaseapp.com",
   projectId: "netflixgpt-d7134",
   storageBucket: "netflixgpt-d7134.firebasestorage.app",
   messagingSenderId: "444254747515",
   appId: "1:444254747515:web:1e101d14395855a7589bde",
   measurementId: "G-RY40C01600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
