// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDDPxJSuk__qyZIUVe0Lr5AFis_6UOLgQY",
  authDomain: "whats-app-1b651.firebaseapp.com",
  projectId: "whats-app-1b651",
  storageBucket: "whats-app-1b651.appspot.com",
  messagingSenderId: "1039060571450",
  appId: "1:1039060571450:web:b95066a5efc23c66686c03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider()





