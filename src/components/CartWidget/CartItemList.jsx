import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import style from './cartItemList.module.css'

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartItemList = ({cartItems}) => {
  const { cart } = useContext(dataContext);


  return (cart.length) > 0 ? (
    <div className='container'>
      <h2 className={style.title}>Cart Items:</h2>
      {cart.map((cartItem) => (<CartElements key={cartItem.id} cartItem={cartItem}/>))}
      <CartTotal cartItems={cartItems} />
      <div className={style.actButtons}>
        <Button>Pagar</Button>
        <Link to={'/home'}>
          <Button>Seguir Comprando</Button>
        </Link>
      </div>
    </div>    
  ): (
    <h2 className={style.emptyCart}>Your cart is empty</h2>
  )
}

export default CartItemList