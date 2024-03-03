import React from 'react'
import Hero from '../components/heroSection/Hero'
import GridGalllery from '../components/gallery/GridGalllery'
import Testimonial from '../components/testimonials/Testimonial'

export default function Home() {
  return (
    <div>
      <Hero />
      <GridGalllery />
      <Testimonial />
    </div>
  )
}
