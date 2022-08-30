import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

import Header from '@/components/Header'
import HeaderImage from '/images/header_bg_5.jpg'
import trainers from './data.js'
import './trainers.css'
import Trainer from '@/components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
        assumenda natus cupiditate commodi similique accusamus nemo temporibus
        debitis aperiam.
      </Header>
      <section className='trainers'>
        <div className='container trainers__container'>
          {trainers.map(({ id, image, name, job, socials }) => {
            return <Trainer key={id}></Trainer>
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
