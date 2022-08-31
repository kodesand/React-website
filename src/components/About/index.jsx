import SectionHeader from '@/components/SectionHeader'
import { BsPersonCircle } from 'react-icons/bs'
import { SiOpenaigym } from 'react-icons/si'

import Card from '@/UI/Card'
import values from './data.js'
import Image from '/images/values.png'
import './style.css'

const About = () => {
  return (
    <section className='values'>
      <div className='container values__container'>
        <div className='values__left'>
          <div className='values__image'>
            <img src={Image} alt='' />
          </div>
        </div>
        <div className='values__right'>
          <SectionHeader icon={<BsPersonCircle />} title='About' />
          <p> Ricardo G. Bernardo (RGB) - owner of RGB LeatherCrafts</p>
          <div className='values__wrapper'>
            {values.map(({ id, title, desc }) => {
              return (
                <Card key={id} className='values__value'>
                  <span>
                    <SiOpenaigym />
                  </span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
