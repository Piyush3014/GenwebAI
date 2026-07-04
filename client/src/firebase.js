// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-330b0.firebaseapp.com",
  projectId: "genwebai-330b0",
  storageBucket: "genwebai-330b0.firebasestorage.app",
  messagingSenderId: "624617208129",
  appId: "1:624617208129:web:92ecab01be9e6ff7b0c9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
