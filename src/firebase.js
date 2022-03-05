import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkPA_B73GDgI4za20sNoK1LyClkWki2jI",
  authDomain: "linkedin-clone-a33e5.firebaseapp.com",
  projectId: "linkedin-clone-a33e5",
  storageBucket: "linkedin-clone-a33e5.appspot.com",
  messagingSenderId: "261610691602",
  appId: "1:261610691602:web:859758b5a1fa1027e6cccb",
  measurementId: "G-TV28RNSLH0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
