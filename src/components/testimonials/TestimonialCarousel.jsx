import React from 'react'
import './testimonial.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function TestimonialCarousel() {
  const carouselImages = [
    'https://www.lafurniturestore.com/media/cgp/customer/1691308126-71_VGRHRHS-AC-201-PNK-CH.jpeg',
    'https://www.lafurniturestore.com/media/cgp/customer/1687884464-87_1675763215-VGCS-DT-16152_VGCS-ACH-20071.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1675772012-VGCS-21073-SO.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1696406796-31_VGVCB8366-WHT.JPG',
    'https://www.lafurniturestore.com/media/cgp/customer/1694710600-06_VGCCRIALTO4_VGHB268E-EBN_1.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1694710173-03_VGCSDT-1571-MRB_VGCSCH-9808A_Cadence_Campbell.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1693648332-67-VGKNE9212-8GRY-SECT-1.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1691308126-71_VGRHRHS-AC-201-PNK-CH.jpeg',
    'https://www.lafurniturestore.com/media/cgp/customer/1687884464-87_1675763215-VGCS-DT-16152_VGCS-ACH-20071.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1675772012-VGCS-21073-SO.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1696406796-31_VGVCB8366-WHT.JPG',
    'https://www.lafurniturestore.com/media/cgp/customer/1694710600-06_VGCCRIALTO4_VGHB268E-EBN_1.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1694710173-03_VGCSDT-1571-MRB_VGCSCH-9808A_Cadence_Campbell.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1693648332-67-VGKNE9212-8GRY-SECT-1.jpg',
    'https://www.lafurniturestore.com/media/cgp/customer/1691308126-71_VGRHRHS-AC-201-PNK-CH.jpeg',
    'https://www.lafurniturestore.com/media/cgp/customer/1687884464-87_1675763215-VGCS-DT-16152_VGCS-ACH-20071.jpg',

  ]
  return (
    <div className='mt-24'>
      <div className="block-title mb-4">
        <h3>
          <span>Share Your Style With </span>
          #lafurniturestore
          <a href="https://www.lafurniturestore.com/custom-gallery-page" className="button__more">
            See All            </a>
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="max-w-stretch z-50">
          {
            carouselImages.length > 0 &&
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              showArrows={true}
              showIndicators={false}
              renderArrowPrev={(clickHandler) => (
                <button
                  className="absolute flex left-5 translate-y-[-100%] carousel-arrow bg-white"
                  type="button"
                  onClick={clickHandler}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="icon"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M768 903.232L717.568 960 256 512 717.568 64 768 120.768 364.928 512z"></path>
                    </svg>
                  </span>
                </button>
              )}
              renderArrowNext={(clickHandler) => (
                <button
                  className="absolute flex right-5 translate-y-[-100%] carousel-arrow bg-white"
                  type="button"
                  onClick={clickHandler}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="icon"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M256 120.768L306.432 64 768 512 306.432 960 256 903.232 659.072 512z"></path>
                    </svg>
                  </span>
                </button>
              )}
              centerSlidePercentage={33}
              centerMode={true}

            >
              {
                carouselImages.map((img, index) => {
                  return (
                    <div key={index} className='px-[3%] max-h-[310px]'>
                      <img src={img} alt="carousel" />
                    </div>
                  )
                })
              }
            </Carousel>
          }
        </div>
      </div>
      <div className="bg-[#f7ede3] relative pt-36 min-h-96 -top-16">
        <div className="block-title mb-4">
          <h3 className='text-center'>
            Over <strong>100
              <strong className='counter'>
                <em className='number'>3</em>
                <em className='number'>2</em>
              </strong> </strong> Reviews
            <a href="https://www.lafurniturestore.com/patio.html" className="button__more">See All</a>
            <p className='text-center z-50 bg-[#f7ede3] -pt-1'> From Our Real Customers</p>
          </h3>
        </div>
        <ul className="reviews-list max-w-[1426px] w-full mx-auto grid grid-cols-2 gap-x-3 pb-24 px-2">
          <li className='bg-white py-10 px-6 grid grid-cols-2'>
            <div className="image-holder">
              <div className="frame">
                <a href="https://www.lafurniturestore.com/modrest-aspen-modern-white-gold-tv-stand.html">
                  <img className='mx-4 my-14' src="https://www.lafurniturestore.com/media/wysiwyg/09-re.jpg" alt="Modrest Aspen Modern White & Gold TV Stand" />
                </a>
              </div>
              <a href="https://www.lafurniturestore.com/modrest-aspen-modern-white-gold-tv-stand.html">
                <strong>Modrest Aspen Modern White &amp; Gold TV Stand</strong>
              </a>
            </div>
            <div className="text-holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path fill='#f7ede3' d="M7.518 25c1.428 0 2.832-.616 3.863-1.623C12.415 22.37 13 21.012 13 19.502c0-1.39-.616-2.673-1.332-3.766-.714-1.09-1.558-2.03-2.26-3.023-.406-.573-.766-1.164-1.02-1.785-.256-.62-.405-1.287-.388-1.926.032-1.223.728-2.428 1.766-3.076.447-.278.187-1.02-.358-.916-2.647.5-5.093 1.95-6.8 4.035C.904 11.13 0 13.805 0 16.5c0 2 .64 4.187 1.965 5.828a7.402 7.402 0 002.45 1.987c.954.474 2.026.685 3.103.685zm-.036-1c-.9 0-1.81-.178-2.623-.582-.815-.404-1.54-1-2.118-1.717C1.586 20.27 1 18.474 1 16.5c0-2.452.83-4.922 2.383-6.82 1.114-1.362 2.64-2.287 4.273-2.95A4.775 4.775 0 007 9c-.02.81.167 1.586.463 2.307.296.718.697 1.372 1.13 1.98.744 1.054 1.578 1.99 2.237 2.995.657 1.003 1.17 2.102 1.17 3.217 0 1.158-.48 2.344-1.316 3.16-.84.82-2.017 1.338-3.202 1.338zm17.036 1c1.428 0 2.832-.616 3.863-1.623C29.415 22.37 30 21.01 30 19.5c0-1.39-.616-2.67-1.332-3.764-.714-1.09-1.558-2.03-2.26-3.023-.406-.573-.766-1.164-1.02-1.785-.256-.62-.405-1.287-.388-1.926.032-1.223.728-2.428 1.766-3.076.447-.278.187-1.02-.358-.916-2.647.5-5.093 1.95-6.8 4.035C17.904 11.13 17 13.808 17 16.502c0 2 .64 4.185 1.965 5.826a7.402 7.402 0 002.45 1.987c.954.474 2.026.685 3.103.685zm-.036-1c-.9 0-1.81-.178-2.623-.582-.815-.404-1.54-1-2.118-1.717C18.586 20.27 18 18.476 18 16.503c0-2.452.83-4.924 2.383-6.822 1.114-1.362 2.64-2.287 4.273-2.95A4.768 4.768 0 0024 9c-.02.81.167 1.586.463 2.307.296.718.697 1.372 1.13 1.98.744 1.054 1.578 1.99 2.237 2.995.657 1.003 1.17 2.1 1.17 3.215 0 1.158-.48 2.346-1.316 3.162-.84.82-2.017 1.338-3.202 1.338z"></path>
              </svg>
              <p>Beautiful piece of furniture. A true asset to my audio and video system. We spend a lot of time finding just the right TV stand for the intended space, and it looks like we finally found it. i was a little afraid the high gloss might look tacky, but the clean lines just look understated, unobtrusive and quite beautiful. The remotes work well with it. It's very heavy and packaged in lots of layers. I'm very glad I paid extra for white glove delivery.</p>
            </div>
          </li>
          <li className='bg-white py-10 px-6 grid grid-cols-2'>
            <div className="image-holder">
              <div className="frame">
                <a href="https://www.lafurniturestore.com/divani-casa-testro-modern-grey-fabric-sectional-sofa-w-storage.html">
                  <img className='mx-4 my-14' src="https://www.lafurniturestore.com/media/wysiwyg/img35-2.jpg" alt="Divani Casa Testro Modern Grey Fabric Sectional Sofa w/ Storage" />
                </a>
              </div>
              <a href="https://www.lafurniturestore.com/divani-casa-testro-modern-grey-fabric-sectional-sofa-w-storage.html">
                <strong>Divani Casa Testro Modern Grey Fabric Sectional Sofa w/ Storage</strong>
              </a>
            </div>
            <div className="text-holder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path fill='#f7ede3' d="M7.518 25c1.428 0 2.832-.616 3.863-1.623C12.415 22.37 13 21.012 13 19.502c0-1.39-.616-2.673-1.332-3.766-.714-1.09-1.558-2.03-2.26-3.023-.406-.573-.766-1.164-1.02-1.785-.256-.62-.405-1.287-.388-1.926.032-1.223.728-2.428 1.766-3.076.447-.278.187-1.02-.358-.916-2.647.5-5.093 1.95-6.8 4.035C.904 11.13 0 13.805 0 16.5c0 2 .64 4.187 1.965 5.828a7.402 7.402 0 002.45 1.987c.954.474 2.026.685 3.103.685zm-.036-1c-.9 0-1.81-.178-2.623-.582-.815-.404-1.54-1-2.118-1.717C1.586 20.27 1 18.474 1 16.5c0-2.452.83-4.922 2.383-6.82 1.114-1.362 2.64-2.287 4.273-2.95A4.775 4.775 0 007 9c-.02.81.167 1.586.463 2.307.296.718.697 1.372 1.13 1.98.744 1.054 1.578 1.99 2.237 2.995.657 1.003 1.17 2.102 1.17 3.217 0 1.158-.48 2.344-1.316 3.16-.84.82-2.017 1.338-3.202 1.338zm17.036 1c1.428 0 2.832-.616 3.863-1.623C29.415 22.37 30 21.01 30 19.5c0-1.39-.616-2.67-1.332-3.764-.714-1.09-1.558-2.03-2.26-3.023-.406-.573-.766-1.164-1.02-1.785-.256-.62-.405-1.287-.388-1.926.032-1.223.728-2.428 1.766-3.076.447-.278.187-1.02-.358-.916-2.647.5-5.093 1.95-6.8 4.035C17.904 11.13 17 13.808 17 16.502c0 2 .64 4.185 1.965 5.826a7.402 7.402 0 002.45 1.987c.954.474 2.026.685 3.103.685zm-.036-1c-.9 0-1.81-.178-2.623-.582-.815-.404-1.54-1-2.118-1.717C18.586 20.27 18 18.476 18 16.503c0-2.452.83-4.924 2.383-6.822 1.114-1.362 2.64-2.287 4.273-2.95A4.768 4.768 0 0024 9c-.02.81.167 1.586.463 2.307.296.718.697 1.372 1.13 1.98.744 1.054 1.578 1.99 2.237 2.995.657 1.003 1.17 2.1 1.17 3.215 0 1.158-.48 2.346-1.316 3.162-.84.82-2.017 1.338-3.202 1.338z"></path>
              </svg>
              <p>What a great sofa! It looks really modern, like something that you'd expect to see in a high end art studio, but manages to work with the rest of our furniture. Actually, it adds a lot of elegance to our room. Bonus: it's quite comfortable! The couch is small enough for the apt but big enough for me to snuggle with my kiddos on the chaise and let my husband lay down and stretch out on the sofa.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
