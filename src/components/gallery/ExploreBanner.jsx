import React from 'react'

export default function ExploreBanner() {
  return (
    <div>
      <div className="flex bg-[#b3c6d0]">
        <img className='w-7/12' src="https://www.lafurniturestore.com/media/wysiwyg/lamod-front-1.jpg" alt="LA Mod Collection" />
        <div className="flex items-center">
          <div className="max-w-[500px] p-12">
            <h2 className="mb-4 font-bold text-white text-3xl leading-9 text-center">LAMOD<br />Collection</h2>
            <p className='max-w-[410px] mb-12 text-white text-center px-1'>Curated Selection of The Best High-end Design Pieces For Our Style-conscious Buyers </p>
            <div className="flex justify-center">
              <a className='py-4 px-7 font-medium text-base text-center bg-black text-white hover:text-active hover:bg-white transition-colors duration-150' href="https://www.lafurniturestore.com/collections/lamod-premium.html">EXPLORE NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}