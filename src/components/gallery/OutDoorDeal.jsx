import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { products } from './products';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './common.scss'
import '../heroSection/herocarousel.scss'

const CustomIndicator = ({ isSelected, onClick }) => {
  const style = {
    // Define your custom styles here
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    backgroundColor: !isSelected ? 'black' : 'transparent',
    border: '2px solid black',
    cursor: 'pointer'
  };

  return (
    <span style={style} onClick={onClick} />
  );
};

export default function OutDoorDeal() {
  const chunkArray = (arr, size) =>
    arr.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = []; // start a new chunk
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);

  const productChunks = chunkArray(products, 4);
  return (
    <div className='max-w-stretch mx-auto'>
      <div className="block-title mb-4">
        <h3>
          Outdoor Deals
          <a href="https://www.lafurniturestore.com/patio.html" className="button__more">See All</a>
        </h3>
      </div>
      <div className="px-14 custom-carousel">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={100}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <CustomIndicator isSelected={true} onClick={onClickHandler} key={index} />
              );
            }
            return (
              <CustomIndicator onClick={onClickHandler} key={index} />
            );
          }}
          renderArrowPrev={(clickHandler) => (
            <button
              className="absolute flex left-0 top-1/3 carousel-arrow bg-white"
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
              className="absolute flex right-0 top-1/3  carousel-arrow bg-white"
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
          {productChunks.map((group, index) => (
            <div key={index} className="carousel-slide grid grid-cols-4 gap-7">
              {group.map((product, index) => (
                <div key={index} className="product-item h-full w-full" >
                  <div className='relative'>
                    <div className="relative cursor-pointer overflow-hidden">
                      <img src={product.image} alt={product.name} className="primary-image" />
                      <img src={product.secondaryImage} alt={product.name} className="secondary-image" />
                    </div>
                    <div className="actions flex left-0 right-0 px-7">
                      <a href="#" className="action towishlist flex justify-center" title="Add to Wishlist">
                        <span className='text-white text-sm font-medium'>Add to Wishlist</span>
                        <span className='flex justify-center items-center ml-2'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 00.258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <a className="action weltpixel-quickview text-white text-lg font-medium flex justify-center">

                        <span className='flex justify-center items-center mr-2'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#fff"
                              strokeWidth="1.5"
                              d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704z"
                            ></path>
                            <path
                              stroke="#fff"
                              strokeWidth="1.5"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                        </span>
                        <span className='text-white text-sm font-medium'>Quick View</span>
                      </a>
                    </div>
                  </div>

                  <h3 className='font-semibold '>{product.name}</h3>
                  <div className='flex justify-center items-center'>
                    <p className='text-sm mr-1'>{product.originalPrice}</p>
                    <p className='text-active text-lg prices'> {product.price}</p>
                  </div>
                  {product.inStock ? <p className="stock-info"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12.611L8.923 17.5 20 6.5"
                    ></path>
                  </svg>
                    In Stock</p> : <p className="stock-info out-of-stock">Out Of Stock</p>}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
