import React from 'react'
import { Link } from 'react-router-dom'

import Image from '/images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a
            odit sed delectus officia magni est molestiae vitae facere
            consectetur?
          </p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'>
            <div className='main__header-image'>
              <img src={Image} alt='main header image' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
