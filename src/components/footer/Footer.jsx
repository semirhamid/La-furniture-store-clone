import React from 'react'
import './footer.scss'
import FooterBottom from './FooterBottom'
import FooterMid from './FooterMid'

export default function Footer() {
  return (
    <footer>
      <div className="page-footer pt-12">
        <div className='footer-mid'>
          <FooterMid />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}
