import React, { useContext, useState } from 'react'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import db from '../../../db/firebase-config.js';
import { dataContext } from '../Context/DataContext.jsx';

const DeleteButton = ({cartItem}) => {
  const {cart, setCart} = useContext(dataContext)

  const removeCart = (id) => setCart(cart.filter((item) => item.id !== id))

  // const [cartItems, setCartItems] = useState([])
  // const cartCollectionRef = collection(db, "cartItems")

  // const getCartProducts = async () => {
  //   const cartCollection = await getDocs(cartCollectionRef);
  //   setCartItems(
  //     cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //   )
  // }

  // const deleteItem = async (id) => {
  //   const docRef = doc(db, "cartItems", id)
  //   await deleteDoc(docRef);
  //   getCartProducts();
    
  // }

  return (
    <div>
        <IconButton onClick={() => removeCart(cartItem.id)} aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
    </div>
  )
}

export default DeleteButton