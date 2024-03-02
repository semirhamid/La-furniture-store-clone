import React from 'react'
import HeaderBanner from "./HeaderBanner"
import HeaderNavigation from './HeaderNavigation'
import HeaderTarget from './HeaderTarget'
import './header.scss'

export default function Header() {
  return (
    <div>
      <HeaderBanner />
      <div className="shadow-custom">
        <HeaderTarget />
        <HeaderNavigation />
      </div>
    </div>
  )
}
