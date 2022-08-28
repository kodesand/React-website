import { useState } from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

import SectionHeader from '@/components/SectionHeader'
import Card from '@/UI/card/index'

import data from './data.js'
import './style.css'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = data[index]

  return (
    <section className='testimonials'>
      <div className='container testimonials__container'>
        <SectionHeader icon={<ImQuotesLeft />} title='Testimonials' />
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial__quote'>{`"${quote}`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className='testimonials__btn-container'>
          <IoIosArrowDropleftCircle />
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
