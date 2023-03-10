import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../ItemCard/ItemCard'
import style from './itemListContainer.module.css'

const ItemListContainer = ({products}) => {
  const {catid} = useParams();
  if (catid) {
    products = products.filter((product) => product.category === catid)
  }
  return (
    <div className={style.container}>
        {products.map((product) => (
        <ItemCard key={product.id} product={product} />))}
    </div>
    )
}

export default ItemListContainer