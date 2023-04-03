import { addDoc, collection } from "firebase/firestore";
import products from "../products.js";
import db from "./firebase-config.js";

const itemsCollectionRef = collection(db, "items");

const promises = products.map((product) => addDoc(itemsCollectionRef, product));

Promise.all(promises).then(() => {
    console.log("All done!");
    process.exit(0);
})