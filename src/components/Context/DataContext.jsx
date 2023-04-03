import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import db from "../../../db/firebase-config";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const itemsCollectionRef = collection(db, "items")

    const getProducts = async () => {
        const itemsCollection = await getDocs(itemsCollectionRef);
        setProducts(
        itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    );
    }
    useEffect(() => {
        getProducts();
    }, []);
    return(
        <dataContext.Provider value={{ products, cart, setCart }}>{children}</dataContext.Provider>
    )
};

export default DataProvider