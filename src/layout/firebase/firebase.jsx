import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDZjeL7JGnDHSSx64g0i1KUtiFNvDP0zgA",
  authDomain: "rate-it-cf6e6.firebaseapp.com",
  projectId: "rate-it-cf6e6",
  storageBucket: "rate-it-cf6e6.appspot.com",
  messagingSenderId: "869006770455",
  appId: "1:869006770455:web:d4af8f6ea27ee4b4ca7752",
  measurementId: "G-L6TM3H9MDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);