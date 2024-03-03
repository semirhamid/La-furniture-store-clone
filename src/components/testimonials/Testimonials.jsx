import React from 'react'
import './cards.scss'
import NewsletterSignup from './NewsletterSignup'

export default function Testimonials() {
  return (
    <div>
      <div className="widget block block-static-block">
        <ul className="benefit grid grid-cols-4">
          <li>
            <img src="https://www.lafurniturestore.com/media/wysiwyg/ico-packages.png" alt="Affordable Luxury Icon" />
            <div className="text-holder">
              <h2>Affordable <br />Luxury</h2>
              <p className='text-[#646464]'>Unique and exclusive designs at a price that truly makes luxury affordable.</p>
            </div>
          </li>
          <li>
            <img src="https://www.lafurniturestore.com/media/wysiwyg/ico-packages.png" alt="Shop The Look Packages Icon" />
            <div className="text-holder">
              <h2>"Shop The Look" Packages</h2>
              <p className='text-[#646464]'>LA Furniture offers full package rooms designed and curated by our interior designers.</p>
            </div>
          </li>
          <li>
            <img src="https://www.lafurniturestore.com/media/wysiwyg/ico-ship.png" alt="In-Stock And Ready To Ship Icon" />
            <div className="text-holder">
              <h2>In-Stock And Ready To Ship</h2>
              <p className='text-[#646464]'>Local Pickup and White Glove Delivery available.</p>
            </div>
          </li>
          <li>
            <img src="https://www.lafurniturestore.com/media/wysiwyg/ico-design.png" alt="Design Services Available Icon" />
            <div className="text-holder">
              <h2>Design Services Available</h2>
              <p className='text-[#646464]'>From quick updates to total makeovers, our Design Experts are ready to help with style advice.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="page-footer">
        <NewsletterSignup />
      </div>
    </div>
  )
}
