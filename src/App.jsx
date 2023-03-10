import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedItem from './components/DetailedItem/DetailedItem'

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<ItemListContainer products={products}/>} />
        <Route path='/category/:catid' element={<ItemListContainer products={products}/>} />
        <Route path='/home/:id' element={<DetailedItem products={products} />} />
        <Route path='/category/:catid/:id' element={<DetailedItem products={products} />} />
      </Routes>
    </div>
  )
}

export default App
