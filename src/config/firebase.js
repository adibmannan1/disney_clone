import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgNlpKa6sBO7z7q1vzuecqz76C1N-P4sQ",
  authDomain: "disney-clone-a6bfa.firebaseapp.com",
  projectId: "disney-clone-a6bfa",
  storageBucket: "disney-clone-a6bfa.appspot.com",
  messagingSenderId: "818740094469",
  appId: "1:818740094469:web:092e60dbc2beb84db95e6c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();