import React from 'react'
import HeaderBanner from "./HeaderBanner"
import HeaderNavigation from './HeaderNavigation'
import HeaderTarget from './HeaderTarget'

export default function Header() {
  return (
    <div>
      <HeaderBanner />
      <HeaderTarget />
      <HeaderNavigation />
    </div>
  )
}
