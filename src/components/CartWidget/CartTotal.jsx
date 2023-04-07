import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import style from './cartElements.module.css'

const CartTotal = ({}) => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc, element) => acc + element.price, 0).toFixed(2)
  return (
    <div>
        <h3 className={style.total}>Total a pagar: {total}</h3>
    </div>
  )
}

export default CartTotal