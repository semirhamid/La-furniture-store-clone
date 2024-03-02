import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './herocarousel.scss';

export default function HeroCarousel() {
  return (
    <div>
      <Carousel
        autoPlay
        interval={5000}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={(clickHandler) => (
          <button
            className="absolute flex left-5 translate-y-1/2 carousel-arrow bg-white"
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
            className="absolute flex right-5 translate-y-1/2 carousel-arrow bg-white"
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
      >
        <div>
          <img src="https://www.lafurniturestore.com/media/aw_rbslider/slides/Desktop_Banner_1__1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="https://www.lafurniturestore.com/media/aw_rbslider/slides/Web_Banner_8_2_.jpg" alt="Banner 2" />
        </div>
      </Carousel>
    </div>
  )
}
