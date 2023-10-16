import React from 'react'
import './services.css'
import {FaXingSquare} from "react-icons/fa"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li> 

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li> 

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li> 

            <li>
              <FaXingSquare className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>
      </div>
      
      </section>
  )
}

export default Services