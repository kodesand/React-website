import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

import Header from '@/components/Header'
import HeaderImage from '/images/header_bg_5.png'
import products from './data.js'
import './products.css'
import Product from '@/components/Product'

const Products = () => {
  return (
    <>
      <Header title='Our Products' image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
        assumenda natus cupiditate commodi similique accusamus nemo temporibus
        debitis aperiam.
      </Header>
      <section className='products'>
        <div className='container products__container'>
          {products.map(({ id, image, name, price, link }) => {
            return (
              <Product
                key={id}
                image={image}
                name={name}
                price={price}
                link={link}
              ></Product>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Products
