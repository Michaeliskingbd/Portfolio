import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Black Modern Chief Exclusive Office Resume.mp4'
import HeaderSocials from './HeaderSocials'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header>
      <div   className="container header__container">
        <h5 data-aos="flip-right" data-aos-duration="4000">Hello I'm</h5>
        <h1 data-aos="flip-left" >Michael Aladejuyigbe</h1>
        <h5 data-aos="flip-down"  className='text-light'>
          Fullstack Developer
        </h5>
        
        <CTA/>

       <div data-aos="fade-right" data-aos-duration="4000" className='me' >
          <video autoPlay src={ME} alt='me'/>
  </div>

         <a href='#contact' className='scroll__down'>Scroll down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header