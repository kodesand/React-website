import Image from '/images/values.jpg'
import SectionHeader from '@/components/SectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import { SiOpenaigym } from 'react-icons/si'

import Card from '@/UI/Card'
import values from './data.js'
import './style.css'

const Values = () => {
  return (
    <section className='values'>
      <div className='container values__container'>
        <div className='values__left'>
          <div className='values__image'>
            <img src={Image} alt='' />
          </div>
        </div>
        <div className='values__right'>
          <SectionHeader icon={<GiCutDiamond />} title='Values' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatum!
          </p>
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

export default Values
