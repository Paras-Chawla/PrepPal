// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlOTrpSd0N9r2N1D2v78cTPoBqrRDFSnU",
  authDomain: "preppal-1c26f.firebaseapp.com",
  projectId: "preppal-1c26f",
  storageBucket: "preppal-1c26f.firebasestorage.app",
  messagingSenderId: "1075534677903",
  appId: "1:1075534677903:web:7de48a4ae19e17acfeadfa",
  measurementId: "G-MFKVGLZM0F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);