import Card from '@/UI/card'

import './style.css'

const Product = ({ image, name, job, socials }) => {
  return (
    <Card className='product'>
      <div className='product__img'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className='product__socials'>
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} target='_blank' rel='noreffer noopener'>
              {icon}
            </a>
          )
        })}
      </div>
    </Card>
  )
}

export default Product
