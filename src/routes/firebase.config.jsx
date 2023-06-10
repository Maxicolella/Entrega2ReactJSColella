// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5knr3RKfDABVYZaGS0rEqr6pPrIm-gBA",
  authDomain: "proyecto-maxicolella.firebaseapp.com",
  projectId: "proyecto-maxicolella",
  storageBucket: "proyecto-maxicolella.appspot.com",
  messagingSenderId: "644887194469",
  appId: "1:644887194469:web:7f61702a3ee02a31174f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)