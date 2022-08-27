import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'

import { links } from './data.js'
import Logo from '/images/logo.png'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
      <div className='container nav__container'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='Nav Logo' />
        </Link>

        <ul
          className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          onClick={() => {
            setIsNavShowing(!isNavShowing)
          }}
          className='nav__toggle-btn'
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
