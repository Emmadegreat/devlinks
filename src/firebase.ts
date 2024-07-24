import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeyUZCbOBvtBS1vdmfKE7FcO3NhraGIUI",
  authDomain: "devlinks-62b5f.firebaseapp.com",
  projectId: "devlinks-62b5f",
  storageBucket: "devlinks-62b5f.appspot.com",
  messagingSenderId: "521692599983",
  appId: "1:521692599983:web:ab6b92964b0ab1143ba65a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };