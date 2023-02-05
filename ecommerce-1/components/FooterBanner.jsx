import React from 'react'
import Link from 'next/Link'
import {urlFor} from '../lib/client'
const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>{footerBanner.discount}</h3> <br />
          <h1>{footerBanner.largeText1} </h1>
          <h1>{footerBanner.largeText2} </h1> <br />
          <h3>{footerBanner.saleTime}</h3>
        </div>
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <p>{footerBanner.midText}</p>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type='button'>{footerBanner.buttonText}</button>
          </Link>
        </div>
        <img src= {urlFor(footerBanner.image)} className="footer-banner-image" alt="product" />
      </div>
    </div>
  )
}

export default FooterBanner