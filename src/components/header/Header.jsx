import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Black Modern Chief Exclusive Office Resume.mp4'
import HeaderSocials from './HeaderSocials'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../UserContext'
import ParticleEffect from '../ParticleEffect'

const Header = () => {

  const { user } = useUserContext();
  

    const [showPopup, setShowPopup] = useState(false);

    
  
    useEffect(() => {

    
        const timeoutId1 = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
     
    const timeoutId = setTimeout(() => {
        setShowPopup(false);
    }, 10000);
  
     
    return () => {
      clearTimeout(timeoutId);
    };
    }, []);
  
    

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <header>
      <div className={`popup-message ${showPopup ? 'visible' : 'hidden'}`}>
      <p>Dear {user ? user.name : "visitor"}<br/>Please note that this site is still under contruction. Thank you  <FontAwesomeIcon  icon={faFaceSmile}/></p>
    </div>
      <div   className="container header__container">
        <h5 data-aos="flip-right" data-aos-duration="4000">Hello <span style={{color:"#4db5ff"}}>{user ? user.name : 'Visitor'}</span> i'm</h5>
        <h1 data-aos="flip-left" >Michael Aladejuyigbe</h1>
        <h5 data-aos="flip-down"  className='text-light'>
          Software Developer
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