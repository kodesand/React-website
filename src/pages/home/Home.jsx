import MainHeader from '@/components/MainHeader'
import Products from '@/components/Products'
import Values from '@/components/Values'
import FAQs from '@/components/FAQs'
import Testimonials from '@/components/Testimonials'

import './home.css'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Products />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home
