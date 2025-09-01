import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginquickkart-b0828.firebaseapp.com",
  projectId: "loginquickkart-b0828",
  storageBucket: "loginquickkart-b0828.firebasestorage.app",
  messagingSenderId: "367079205212",
  appId: "1:367079205212:web:d7f6c3e55db39c3812b999",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
