import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaycCcyprWuqXunXVO5ueIEDVqgoY8Res",
  authDomain: "crud-dc7c9.firebaseapp.com",
  projectId: "crud-dc7c9",
  storageBucket: "crud-dc7c9.appspot.com",
  messagingSenderId: "537497081784",
  appId: "1:537497081784:web:00310bf95af6be0a72614d",
  measurementId: "G-MM0K1QESTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
