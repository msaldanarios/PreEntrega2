import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const CartWidget = ({}) => {
  const { cart } = useContext(dataContext);
  return (
    <Badge badgeContent={cart.length} color="warning">
        <ShoppingCartIcon />
    </Badge>
    
  )
}

export default CartWidget