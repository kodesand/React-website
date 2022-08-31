import { Link } from 'react-router-dom'

import Card from '@/UI/card'

import './style.css'

const Product = ({ image, name, price, link }) => {
  return (
    <Card className='product'>
      <div className='product__img'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>Price: {price} </p>
      <Link to={link} className='btn sm'>
        Buy Now
      </Link>
    </Card>
  )
}

export default Product
