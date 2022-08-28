import { Link } from 'react-router-dom'
import { FaCrown } from 'react-icons/fa'
import { SiOpenaigym } from 'react-icons/si'
import { AiFillCaretRight } from 'react-icons/ai'

import SectionHeader from '@/components/sectionHeader/'
import Card from '@/UI/card/index'
import programs from './data'

const Programs = () => {
  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHeader icon={<FaCrown />} title='Programs' />
      </div>
      <div className='programs__wrapper'>
        {programs.map(({ id, info, title, path }) => {
          return (
            <Card className='programs__program' key={id}>
              <span>
                <SiOpenaigym />
              </span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className='btn sm'>
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Programs
