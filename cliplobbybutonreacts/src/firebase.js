// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGa5gRAgn8NfwzXfdrXYmfdHd_DHzP4tQ",
  authDomain: "cliplobby-6ab41.firebaseapp.com",
  projectId: "cliplobby-6ab41",
  storageBucket: "cliplobby-6ab41.appspot.com",
  messagingSenderId: "44759321990",
  appId: "1:44759321990:web:8c23a4dfa6be27286e3007",
  measurementId: "G-7NFERQY1GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default app