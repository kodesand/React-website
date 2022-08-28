import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import './style.css'

const FAQ = ({ question, answer }) => {
  return (
    <article className='faq'>
      <div>
        <h4>{question}</h4>
        <button className='faq__icon'>
          <AiOutlinePlus />
        </button>
      </div>
      <p>{answer}</p>
    </article>
  )
}

export default FAQ
