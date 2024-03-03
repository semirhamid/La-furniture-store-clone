import React from 'react'
import HeroZoom from './Gallery'
import ShopByRoom from './Shop'
import ExploreBanner from './ExploreBanner'
import OutDoorDeal from './OutDoorDeal'
import FurnitureBanner from './FurnitureBanner'
import Stores from './Stores'

export default function GridGalllery() {
  return (
    <>
      <div className='max-w-limit mx-auto mb-24 mt-10'>
        <div className="grid grid-cols-2 space-x-3">
          <div className='space-y-3'>
            <HeroZoom src={'https://www.lafurniturestore.com/media/wysiwyg/1-new_[Osaka].jpg'} name={'OSAKA'} />
            <div className="flex space-x-3 ">
              <HeroZoom src={'https://www.lafurniturestore.com/media/wysiwyg/2-new_[Mixa].jpg'} name={'NIXA'} />
              <HeroZoom className={'ml-auto'} src={'https://www.lafurniturestore.com/media/wysiwyg/3-new_[Fleury].jpg'} name={'FLUERY'} />
            </div>
          </div>
          <div className="flex space-x-3">
            <HeroZoom className={'vertical__stand'} src={'https://www.lafurniturestore.com/media/wysiwyg/4-new_[Mason].jpg'} name={'MASON'} />
            <div className='space-y-3'>
              <HeroZoom src={'https://www.lafurniturestore.com/media/wysiwyg/6-new_[Cambria].jpg'} name={'CAMBRIA'} />
              <HeroZoom src={'https://www.lafurniturestore.com/media/wysiwyg/5-new_[Aspen].jpg'} name={'ASPEN'} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f6f5]">
        <div className='pt-16 px-5 xl:px-0 pb-20 mx-auto max-w-limit'>
          <h3 className="font-bold text-4xl text-center mb-12">Shop by Room</h3>
          <div>
            <ShopByRoom />
          </div>
        </div>
      </div>
      <div className='mb-24'>
        <ExploreBanner />
      </div>
      <div>
        <OutDoorDeal />
      </div>
      <div>
        <FurnitureBanner />
      </div>
      <div>
        <Stores />
      </div>
    </>
  )
}
