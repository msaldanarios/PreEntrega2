import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedItem from './components/DetailedItem/DetailedItem'
import db from "../db/firebase-config.js"
import { collection, getDocs } from 'firebase/firestore'
import CartItemList from './components/CartWidget/CartItemList'
import DetailedImage from './components/DetailedImage/DetailedImage'
import './App.css'
import Spinner from './components/Spinner/Spinner';

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const itemsCollectionRef = collection(db, "items")

  const getProducts = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setProducts(
      itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    );
    setLoading(false)
  }

  // const getProducts = async () => {
  //   const res = await axios.get("https://fakestoreapi.com/products");
  //   setProducts(res.data);
  // }

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products)

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<ItemListContainer products={products}/>} />
        <Route path='/category/:catid' element={<ItemListContainer products={products}/>} />
        <Route path='/home/:id' element={<DetailedItem products={products} />} />
        <Route path='/category/:catid/:id' element={<DetailedItem products={products} />} />
        <Route path='/cart' element={<CartItemList products={products} />}/>
        <Route path='/images/:itemId' element={<DetailedImage products={products} />} />
        <Route path='*' element={<h2 className='error'>Lo sentimos, no contamos con ese producto</h2>} />
      </Routes>
    </div>
  )
}

export default App
