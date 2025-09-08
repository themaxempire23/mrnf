import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA1X5a6rKRkx0cO5Q1dHhoSmahljQqoL0",
  authDomain: "my-auth-app-5f663.firebaseapp.com",
  projectId: "my-auth-app-5f663",
  storageBucket: "my-auth-app-5f663.firebasestorage.app",
  messagingSenderId: "379020438196",
  appId: "1:379020438196:web:a24dda68cf3f3317a785e1",
  measurementId: "G-ECWM1DLCGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app