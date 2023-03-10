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
        {/* <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} to={"/category/mensClothing"}>Men's Clothing</NavLink>
        <NavLink to={"/category/Jewelery"}>Jewelery</NavLink>
        <NavLink to={"/category/Electronics"}>Electronics</NavLink>
        <NavLink to={"/category/womensClothing"}>Women's Clothing</NavLink> */}
        <CartWidget />
    </nav>
  )
}

export default Navbar