
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC7ihelvE5QCQFLocITqwz_LrCV3u0Igxs",
  authDomain: "portfolio-970bc.firebaseapp.com",
  projectId: "portfolio-970bc",
  storageBucket: "portfolio-970bc.appspot.com",
  messagingSenderId: "335012816801",
  appId: "1:335012816801:web:7853699a63df67f33ccde0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);