import { Link } from 'react-router-dom'
import Logo from '/images/logo.png'
import { FaLinkedin, FaFacebookF, FaTiktok, FaShopify } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <article>
          <Link className='logo' to='/'>
            <img src={Logo} alt='Footer Logo' />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            iure id nulla fugit quasi debitis rem harum asperiores sit ad.
          </p>
          <div className='footer__socials'>
            <a
              href='https://facebook.com/tatakrgb'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://instagram.com/rgbleathercrafts'
              target='_blank'
              rel='noreferrer noopener'
            >
              <AiFillInstagram />
            </a>
            <a
              href='https://tiktok.com/@tatakrgb'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaTiktok />
            </a>
            <a
              href='https://shp.ee/9gzr4gx'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaShopify />
            </a>
          </div>
        </article>
        <div className='permalinks'>
          <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/products'>Products</Link>
            <Link to='/contact'>Contact</Link>
          </article>
          <article>
            <h4>Insights</h4>
            <Link to='/'>FAQs</Link>
            <h4>Get In Touch</h4>
            <Link to='/contact'>Contact Us</Link>
          </article>
        </div>
      </div>
      <div className='footer__copyright'>
        <small>2022 RGB LeatherCrafts &copy; All rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
