import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMrPEf1X729FL52Texf1nfL1m8CT7lmWE",
  authDomain: "rick-piw-t01.firebaseapp.com",
  projectId: "rick-piw-t01",
  storageBucket: "rick-piw-t01.firebasestorage.app",
  messagingSenderId: "462374166327",
  appId: "1:462374166327:web:7f1e91e5c7326ec002c4b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;