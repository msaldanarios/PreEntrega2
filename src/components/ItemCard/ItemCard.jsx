import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import style from './itemCard.module.css'
import { dataContext } from '../Context/DataContext';


const ItemCard = ({product}) => {
  const {addProduct} = useContext(dataContext);
  const [goToCart, setGoToCart] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const addQuantity = (quantity) => {
    addProduct(product, quantity)
    setGoToCart(true)
}

  return (
    <Card className={style.container} style={{ width: '300px', height: '600px' }}>
      <Card.Img variant="top" src={product.image} style={{ width: '200px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <div className={style.buttons}>
          <Link to={`${product.id}`}>
            <Button variant="primary">More Details</Button>
          </Link>
          <Link to={'/cart'}>
            <Button onClick={() => addQuantity(cantidad)}>Add to cart</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ItemCard