import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";





const Portfolio = () => {

  
 
  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 3 }}
    id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div  className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG1} alt=''/>
            </div>
            <h3>House listing website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://hlistng-michael-king.vercel.app/' className='btn btn-primary' target='_blank'>Vist Site</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={IMG2} alt=''/>
            </div>
            <h3>E- commerce</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Visit Site</a>
            </div>
          </article>

         
        </div>
    </motion.section>
  )
}

export default Portfolio