import MainHeader from '@/components/MainHeader'
import Products from '@/components/Products'
import About from '@/components/About'
import FAQs from '@/components/FAQs'
import Testimonials from '@/components/Testimonials'

import './home.css'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Products />
      <About />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home
