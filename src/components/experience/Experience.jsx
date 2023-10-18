import React, { useEffect } from 'react'
import './experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="fade-up"  id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div data-aos="fade-up" className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div data-aos="fade-down" className='experience__content'>
            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Typescript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Material UI</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

          </div>
        </div>
        <div data-aos="fade-down" className='experience__frontend'>
        <h3>Backend Development</h3>
          <div data-aos="fade-up" className='experience__content'>
            <article  className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Express.js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>Git</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <FontAwesomeIcon icon={faCheckDouble} className='experience__details-icon'/>
            <div>
            <h4>JWT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience