
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPevp9tVPmo22lcwOZxtW9VBEFdRaXns8",
  authDomain: "disneyplus-clone-7abcf.firebaseapp.com",
  projectId: "disneyplus-clone-7abcf",
  storageBucket: "disneyplus-clone-7abcf.appspot.com",
  messagingSenderId: "603540207001",
  appId: "1:603540207001:web:ce18c32cab50c1672d4f08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;