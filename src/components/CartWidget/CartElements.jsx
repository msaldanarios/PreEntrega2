import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import style from './cartElements.module.css'
import DeleteButton from './DeleteButton';

const CartElements = () => {
  const { cart } = useContext(dataContext);
  return cart.map((product) => {
    return (
      <div key={product.id} className={style.cartItem}>
        <img src={product.image} alt="product-image" height={100} width={70}/>
        <p className={style.titleCart}>{product.title}</p>
        <h4>${product.price}</h4>
        <DeleteButton/>
      </div>
    )
  })
}

export default CartElements