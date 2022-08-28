import { useState } from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

import SectionHeader from '@/components/SectionHeader'
import Card from '@/UI/card'

import testimonials from './data.js'
import './style.css'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = testimonials[index]

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1)

    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
  }
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1)

    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
  }

  return (
    <section className='testimonials'>
      <div className='container testimonials__container'>
        <SectionHeader
          icon={<ImQuotesLeft />}
          title='Testimonials'
          className='testimonials__head'
        />
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial__quote'>{`"${quote}`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className='testimonials__btn-container'>
          <button
            className='testimonials__btn'
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className='testimonials__btn'
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
