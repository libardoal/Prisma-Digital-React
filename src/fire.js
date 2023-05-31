// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAb1Y5WDoPsOe2bZNctskdZEWDJahUNZFs",
  authDomain: "react-prisma-1218f.firebaseapp.com",
  projectId: "react-prisma-1218f",
  storageBucket: "react-prisma-1218f.appspot.com",
  messagingSenderId: "387518461304",
  appId: "1:387518461304:web:ede06aed4545900733048d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);