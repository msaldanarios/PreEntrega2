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

    const addProduct = (producto, newQuantity) => {
        if (isInCart(producto.id)){
            setCart(cart.map(product => {
                return  product.id === producto.id ? { ...product, quantity: product.quantity + newQuantity } : product
            }))
        }else{
            setCart([...cart, { ...producto, quantity: newQuantity }])
        }
    }

    const totalProducts = () =>{
        return cart.reduce((acumulador,ProductoActual) => acumulador  + ProductoActual.quantity,0)
    }

    const isInCart = (id) => cart.find((item) => item.id === id)

    return(
        <dataContext.Provider value={{ products, cart, setCart, addProduct, totalProducts, isInCart }}>{children}</dataContext.Provider>
    )
};

export default DataProvider