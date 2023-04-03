
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyA1xEWjJ_Q4deKmVzAKiboYbG9_bAJ56PQ",
  authDomain: "entregafinalreact-7d110.firebaseapp.com",
  projectId: "entregafinalreact-7d110",
  storageBucket: "entregafinalreact-7d110.appspot.com",
  messagingSenderId: "9985700930",
  appId: "1:9985700930:web:a0f06fd5050aaa2d3069db"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;