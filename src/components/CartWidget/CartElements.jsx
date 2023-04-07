import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import style from './cartElements.module.css'
import DeleteButton from './DeleteButton';

const CartElements = ({cartItem}) => {
  // const { cart } = useContext(dataContext);
  // return cart.map((product) => {
  //   return (
  //     <div key={product.id} className={style.cartItem}>
  //       <img src={product.image} alt="product-image" height={100} width={70}/>
  //       <p className={style.titleCart}>{product.title}</p>
  //       <h4>${product.price}</h4>
  //       <DeleteButton/>
  //     </div>
  //   )
  // })

  return (
    <div key={cartItem.id} className={style.cartItem}>
      <img src={cartItem.image} alt="product-image" height={100} width={70}/>
      <p className={style.titleCart}>{cartItem.title}</p>
      <h4>${cartItem.price}</h4>
      <DeleteButton key={cartItem.id}/>
    </div>
  )
}

export default CartElements