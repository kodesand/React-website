import { Link } from 'react-router-dom'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { SiOpenaigym } from 'react-icons/si'
import { AiFillCaretRight } from 'react-icons/ai'

import SectionHeader from '@/components/sectionHeader/'
import Card from '@/UI/card/index'
import programs from './data'
import './style.css'

const Products = () => {
  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHeader icon={<MdProductionQuantityLimits />} title='Products' />
        <div className='programs__wrapper'>
          {programs.map(({ image, id, info, title, path }) => {
            return (
              <Card className='programs__program' key={id}>
                <div className='img'>
                  <img src={image} alt={name} />
                </div>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
