import React from 'react'
import './footer.scss'
export default function FooterBottom() {
  return (
    <div>
      <div className="footer-bottom">
        <div className="main-area">
          <p className="copyright">
            © 2024 LA Furniture Store. All Rights Reserved.
          </p>
          <div className="col-right">
            Shopping is safe and secure:
            <img src="https://www.lafurniturestore.com/media/wysiwyg/payments.png" alt="various payment methods accepted" />
          </div>
        </div>
      </div>
    </div>
  )
}
