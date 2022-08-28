import { FaQuestion } from 'react-icons/fa'

import SectionHeader from '@/components/sectionHeader'
import FAQ from '@/components/FAQ'
import data from './data.js'
import './style.css'

const FAQs = () => {
  return (
    <section className='faqs'>
      <div className='container faqs__container'>
        <SectionHeader icon={<FaQuestion />} title='FAQs' />
        <div className='faqs__wrapper'>
          {data.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQs
