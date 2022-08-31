import Header from '@/components/Header'
import HeaderImage from '/images/header_bg_3.png'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const images = []

  for (let index = 1; index <= galleryLength; index++) {
    images.push(`/images/gallery${index}.jpg`)
  }
  console.log(images)

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad totam
        maiores eos exercitationem expedita consectetur!
      </Header>
      <section className='gallery'>
        <div className='container gallery__container'>
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
