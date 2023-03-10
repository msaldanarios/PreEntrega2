import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  return (
    <Badge badgeContent={1} color="warning">
        <ShoppingCartIcon />
    </Badge>
    
  )
}

export default CartWidget