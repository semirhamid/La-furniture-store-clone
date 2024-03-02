import React from 'react'
import './herobanner.scss'

export default function HeroBanner() {
  return (
    <div className="bg-[#f2f1ef] text-center py-12 pl-4">
      <div className="max-w-[820px] pr-12 mx-auto flex justify-between items-center">
        <strong className="text-[#212121]">
          Win $100        </strong>
        <form className="max-w-[458px]" novalidate="novalidate" action="https://www.lafurniturestore.com/lafnewsletter/subscriber/new/" method="post" id="content-newsletter-validate-detail">
          <div className="flex flex-wrap">
            <div>
              <label className="flex-1 w-full pb-1" for="content-newsletter"><span className='max-w-[375px]'>Subscribe to our newsletter to get a chance to win a $100 gift card every week.</span></label>
            </div>
            <div className='flex'>
              <div className="inline-block w-[270px] flex-1 h-14">
                <input name="email" type="email" id="content-newsletter" placeholder="Enter Your Email" />
              </div>
              <div className="inline-block text-sm w-[180px] h-14 flex-1">
                <button className="button__outline" title="Subscribe" type="submit">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <button className="terms-link">See our terms and conditions</button>
      </div>
    </div>
  )
}
