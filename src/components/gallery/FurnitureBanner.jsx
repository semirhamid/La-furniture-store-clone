import React from 'react'
import './common.scss'

export default function FurnitureBanner() {
  const products = [
    {
      id: 1,
      name: 'Modrest Cherish - Modern Tan Fabric Dining Chair',
      price: '$385.00',
      imageUrl: 'https://www.lafurniturestore.com/media/catalog/product/c/h/cherish_80595_1.jpg',
      productUrl: 'https://www.lafurniturestore.com/modrest-cherish-modern-tan-fabric-dining-chair.html',
      left: '44.0909%',
      top: '65.5298%'
    },
    {
      id: 2,
      name: 'Nova Domus Roma - Modern Faux Travertine + Gold Bookcase',
      price: '$728.00',
      imageUrl: 'https://www.lafurniturestore.com/media/catalog/product/r/o/rome_bookcase.jpg',
      productUrl: 'https://www.lafurniturestore.com/nova-domus-roma-modern-travertine-gold-bookcase.html',
      left: '33.5455%',
      top: '37.8806%'
    },
    {
      id: 3,
      name: 'Nova Domus Roma - Modern Faux Travertine + Gold File Cabinet',
      price: '$854.00',
      imageUrl: 'https://www.lafurniturestore.com/media/catalog/product/r/o/roma_file_cabinet.jpg',
      productUrl: 'https://www.lafurniturestore.com/nova-domus-roma-modern-travertine-gold-file-cabinet.html',
      left: '77.8182%',
      top: '58.0999%'
    },
    {
      id: 4,
      name: 'Nova Domus Roma - Modern Glass + Faux Travertine Reversible Desk',
      price: '$1,050.00',
      imageUrl: 'https://www.lafurniturestore.com/media/catalog/product/r/o/roma.jpg',
      productUrl: 'https://www.lafurniturestore.com/nova-domus-roma-modern-glass-travertine-reversible-desk.html',
      left: '8.63636%',
      top: '66.5043%'
    }
  ];

  return (
    <div className='bg-[#F7F6F5] furniture'>
      <div className='flex items-stretch py-8'>
        <div className='w-1/2 pt-5 relative' >
          <div className="image-holder absolute top-0 right-0 left-0 bottom-0">
            <div className="easypin" style={{ width: '864px', height: '645px', position: 'relative' }}>
              <div style={{ position: 'relative', height: '100%' }}>
                <img src="https://www.lafurniturestore.com/media/stl/look/laf-home-stl.jpg" alt="" id="look_image_main" style={{ opacity: 1, position: 'relative' }} />
              </div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="mark easypin-marker"
                  style={{ position: 'absolute', cursor: 'pointer', left: product.left, top: product.top, opacity: 1 }}
                >
                  <div className="dot"></div>
                  <div className="holder">
                    <div className="image-box">
                      <img src={product.imageUrl} alt="" />
                    </div>
                    <div className="text-holder">
                      <strong className="name">{product.name}</strong>
                      <div className="price-box">
                        <div className="price">
                          <span className="price">{product.price}</span>
                        </div>
                      </div>
                      <a className="view" href={product.productUrl}>view product</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <ul className="max-w-[515px] mx-16 flex flex-col justify-between">
          <div className='flex justify-between'>
            <li>
              <a href="https://www.lafurniturestore.com/modrest-cherish-modern-tan-fabric-dining-chair.html">
                <div className="holder">
                  <img src="https://www.lafurniturestore.com/media/wysiwyg/STL/laf-home-1.jpg" alt="" />
                </div>
                {/* <strong className="name">Modrest Cherish - Modern Tan Fabric Dining Chair</strong>
                <span className="price-box">
                  <span className="special-price"><span className="price">$385.00</span></span>
                </span> */}
              </a>
            </li>
            <li>
              <a href="https://www.lafurniturestore.com/nova-domus-roma-modern-travertine-gold-bookcase.html">
                <div className="holder">
                  <img src="https://www.lafurniturestore.com/media/wysiwyg/STL/laf-home-2.jpg" alt="" />
                </div>
                {/* <strong className="name">Nova Domus Roma - Modern Faux Travertine + Gold Bookcase</strong>
                <span className="price-box">
                  <span className="special-price"><span className="price">$728.00</span></span>
                </span> */}
              </a>
            </li>
          </div>
          <div className='py-6'>
            <h2 className="font-bold mb-2 text-3xl text-center">Shop The Look:</h2>
            <h3 className="text-center text-lg font-normal mb-3">Explore A Variety Of Styles For Every Room</h3>
            <p className='mb-7 font-light text-[#111111a6]'>LA Furniture offers room ideas designed and curated by our very own, on staff, best interior designers. Our SHOP THE LOOK feature gives you a chance to create impressive, well decorated spaces in your home, without paying the designer price. Find the Look that fits your personality, home and lifestyle, and keep checking back for more and more to come!</p>
            <div className="flex justify-center">
              <a className='button__black' href="https://www.lafurniturestore.com/stl/">EXPLORE ROOM IDEAS</a>
            </div>

          </div>
          <div className='flex justify-between'>
            <li>
              <a href="https://www.lafurniturestore.com/nova-domus-roma-modern-glass-travertine-reversible-desk.html">
                <div className="holder">
                  <img src="https://www.lafurniturestore.com/media/wysiwyg/STL/laf-home-4.jpg" alt="" />
                </div>
                {/* <strong className="name">Nova Domus Roma - Modern Glass + Faux Travertine Reversible Desk</strong>
                <span className="price-box">
                  <span className="special-price"><span className="price">$1,050.00</span></span>
                </span> */}
              </a>
            </li>
            <li>
              <a href="https://www.lafurniturestore.com/nova-domus-roma-modern-travertine-gold-file-cabinet.html">
                <div className="holder">
                  <img src="https://www.lafurniturestore.com/media/wysiwyg/STL/laf-home-3.jpg" alt="" />
                </div>
                {/* <strong className="name">Nova Domus Roma - Modern Faux Travertine + Gold File Cabinet</strong>
                <span className="price-box">
                  <span className="special-price"><span className="price">$854.00</span></span>
                </span> */}
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}
