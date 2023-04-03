import { Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import style from './navbar.module.css'

const navBar = ["men's clothing", "jewelery", "electronics", "women's clothing"];

const Navbar = () => {
  return (
    <nav className={style.container}>
        <Link to="/home">
            <h1>Mosita Clothes</h1>
        </Link>
        {navBar.map((item) => (
                <NavLink to={`/category/${item}`} key={item}>
                  <Button key={item}>
                    {item}
                  </Button>
                </NavLink>
              ))}
        <Link to="/cart">
          <CartWidget />
        </Link>
    </nav>
  )
}

export default Navbar