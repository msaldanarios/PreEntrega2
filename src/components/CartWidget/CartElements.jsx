import React from 'react'
import style from './cartElements.module.css'
import DeleteButton from './DeleteButton';

const CartElements = ({cartItem}) => {

  return (
    <div key={cartItem.id} className={style.cartItem}>
      <img src={cartItem.image} alt="product-image" height={100} width={70}/>
      <p className={style.titleCart}>{cartItem.title}</p>

      <h4>${cartItem.price*cartItem.quantity}</h4>
      <h4>X{cartItem.quantity}</h4>
      <DeleteButton key={cartItem.id} cartItem={cartItem}/>
    </div>
  )
}

export default CartElements