import React from 'react'
import './herobanner.scss'

export default function HeroBanner() {
  return (
    <div className="bg-[#f2f1ef] text-center py-12 pl-4">
      <div className="max-w-limit pr-12 mx-auto flex justify-start items-center">
        <strong className="text-[#212121] pr-24">
          Win $100        </strong>
        <form className="flex flex-1" noValidate="noValidate" action="https://www.lafurniturestore.com/lafnewsletter/subscriber/new/" method="post" id="content-newsletter-validate-detail">
          <div className="flex flex-wrap justify-start">
            <div className='max-w-[375px] mr-12'>
              <label className="w-full block pb-1  text-[17px] text-left" htmlFor="content-newsletter"><span className='text-left'>Subscribe to our newsletter to get a chance to win a $100 gift card every week.</span></label>
            </div>
            <div className='flex'>
              <div className="inline-block w-[270px] flex-1 h-14">
                <input name="email" className='w-full' type="email" id="content-newsletter" placeholder="Enter Your Email" />
              </div>
              <div className="inline-block text-sm w-[180px] h-14 flex-1">
                <button className="button__outline" title="Subscribe" type="submit">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <button className="terms-link text-[#6b6b6a] text-sm">See our terms and conditions</button>
      </div>
    </div>
  )
}
