import React from 'react'
import './store.scss'

export default function Stores() {
  return (
    <div>
      <div className="flex relative">
        <div className="w-1/3">
          <div className="w-[45%] bg-[#b3c6d0] flex justify-end absolute pl-5 pr-16 py-28">
            <div className="max-w-[520px]">
              <hr className='w-6 bg-white h-1' />
              <h2 className="text-4xl pt-7 pb-9 pop text-white font-bold">Our Stores</h2>
              <p className="mb-12 font-thin text-sm leading-7 text-white">Our Furniture Store has one of a kind living room decor, bedroom, dining room, patio and designer furniture. For those who cannot get a hold of modern furniture in their state, you should definitely consider us to be your provider. People from the Midwest, this means you! We would like to invite you to browse our huge selection of modern sofas, <a className="city-store-location" href="https://www.lafurniturestore.com/bedroom/modern-bedroom-1/platform-bed.html">platform beds</a>, <a className="city-store-location" href="https://www.lafurniturestore.com/dining-room/modern-dining.html">contemporary dining sets</a>, and cool looking patio furniture. Our furniture stores are located in Los Angeles, but we ship nationwide to big cities like <a className="city-store-location" href="https://www.lafurniturestore.com/dallas-sale">Dallas</a> <a className="city-store-location" href="https://www.lafurniturestore.com/atlanta-sale">Atlanta</a> <a className="city-store-location" href="http://www.lafurniturestore.com/special/new-york-sale.html">New York</a> <a className="city-store-location" href="https://www.lafurniturestore.com/seattle-sale">Seattle</a> <a className="city-store-location" href="https://www.lafurniturestore.com/houston-sale">Houston</a> <a className="city-store-location" href="https://www.lafurniturestore.com/phoenix-sale">Phoenix</a> <a className="city-store-location" href="https://www.lafurniturestore.com/sacramento-sale">Sacramento</a> <a className="city-store-location" href="https://www.lafurniturestore.com/san-francisco-sale">San Francisco</a> <a className="city-store-location" href="https://www.lafurniturestore.com/san-diego-sale">San Diego</a> <a className="city-store-location" href="https://www.lafurniturestore.com/portland-sale">Portland</a> <a className="city-store-location" href="https://www.lafurniturestore.com/orlando-sale">Orlando</a> <a className="city-store-location" href="https://www.lafurniturestore.com/chicago-sale">Chicago</a> <a className="city-store-location" href="https://www.lafurniturestore.com/miami-sale">Miami</a> and <a className="city-store-location" href="https://www.lafurniturestore.com/las-vegas-sale">Las Vegas</a>. Please do not hesitate to call LA Furniture Store and speak to one of our friendly customer service representatives who are standing by. See our West Los Angeles Woodland Hills <a className="city-store-location" href="https://www.lafurniturestore.com/special/ventura-woodland-hills-store.html">Store</a> and East LA <a className="city-store-location" href="https://www.lafurniturestore.com/special/design-center-floor-model-sale.html">Store</a> and <a className="city-store-location" href="https://www.lafurniturestore.com/areas-we-serve/">areas</a> we serve. See our latest store in <a className="city-store-location" href="https://www.lafurniturestore.com/special/fountain-valley-ca">Fountain Valley</a>, Orange County, CA.</p>
              <div className="clear"></div>
              <span className='text-center'><a className='button__black' href="https://www.lafurniturestore.com/locations">VIEW LOCATIONS</a></span>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <img className='w-full' src="https://www.lafurniturestore.com/media/wysiwyg/home-page-store-slider/banner-7.jpg" alt="slider image" />
        </div>
      </div>
    </div>
  )
}
