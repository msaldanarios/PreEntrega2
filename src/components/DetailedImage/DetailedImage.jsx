import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams, } from 'react-router-dom'
import styles from './detailedImage.module.css'

const DetailedImage = ({products}) => {
  const {itemId} = useParams();
  const product = products.find((product) => product.id == itemId)

  return (
    <div className={styles.container}>
        <img src={product.image} alt="image-product" />
        <Link to={`/home`}>
            <Button variant='primary'>Go back to Home</Button>
        </Link>
    </div>
  )
}

export default DetailedImage