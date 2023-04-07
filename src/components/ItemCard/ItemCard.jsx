import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import style from './itemCard.module.css'
import { dataContext } from '../Context/DataContext';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import db from "../../../db/firebase-config.js"

const ItemCard = ({product}) => {
  const { cart, setCart} = useContext(dataContext);
  const addCart = () => {
    // console.log(product)
    setCart([...cart, product])
    addCartItem(product);
  }
  const [cartItems, setCartItems] = useState([])

  const cartCollectionRef = collection(db, "cartItems")

  const getCartProducts = async () => {
    const cartCollection = await getDocs(cartCollectionRef);
    setCartItems(
      cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    )
  }

  const addCartItem = async () => {
    await addDoc(cartCollectionRef, product );
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <Card className={style.container} style={{ width: '300px', height: '600px' }}>
      <Card.Img variant="top" src={product.image} style={{ width: '200px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <div className={style.buttons}>
          <Link to={`${product.id}`}>
            <Button variant="primary">More Details</Button>
          </Link>
          <Link to={'/cart'}>
            <Button onClick={() => addCart(product)}>Add to cart</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemCard