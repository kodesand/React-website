import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

import Header from '@/components/Header'
import HeaderImage from '/images/header_bg_5.jpg'
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
          {products.map(({ id, image, name, job, socials }) => {
            return (
              <Product
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              ></Product>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Products
