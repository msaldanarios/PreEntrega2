import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import style from './itemCard.module.css'

const ItemCard = ({product}) => {
  return (
    <Card className={style.container} style={{ width: '300px', height: '600px' }}>
      <Card.Img variant="top" src={product.image} style={{ width: '200px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Link to={`${product.id}`}>
          <Button variant="primary">More Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ItemCard