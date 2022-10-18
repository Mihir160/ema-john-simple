// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjL1waG1XIqoCphd-xNp8LmFyDVWYv2HI",
  authDomain: "ema-john-simple-e4baa.firebaseapp.com",
  projectId: "ema-john-simple-e4baa",
  storageBucket: "ema-john-simple-e4baa.appspot.com",
  messagingSenderId: "984710192089",
  appId: "1:984710192089:web:83537ea87cdf9b0bebd7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app