import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import style from './detailedItem.module.css'

const DetailedItem = ({products}) => {
  const {id} = useParams();
  const product = products.find((product) => product.id == id)
    
  return (
    <div className={style.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt="pro" width={300} />
      <h3>Price: ${product.price}</h3>
      <h3>Rating: {product.rating.rate}</h3>
      <p>Description: {product.description}</p>
      <Link to={`/home`}>
        <Button variant='primary'>Go back to Home</Button>
      </Link>
    </div>
  )
}

export default DetailedItem