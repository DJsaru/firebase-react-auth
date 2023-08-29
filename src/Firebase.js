import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqOF8MwFsmfCNReDaZhg5Dhcpzny4Odd4",
  authDomain: "fir-form-51b13.firebaseapp.com",
  databaseURL: "https://fir-form-51b13-default-rtdb.firebaseio.com",
  projectId: "fir-form-51b13",
  storageBucket: "fir-form-51b13.appspot.com",
  messagingSenderId: "124079489170",
  appId: "1:124079489170:web:8879ee7c986d47ac80e64b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app); 
export const provider = new GoogleAuthProvider();