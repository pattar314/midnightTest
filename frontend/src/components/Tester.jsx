import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import './styles/LandingPageStyles.css'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import axios from 'axios'

const Tester = () => {

  // const [projectsData, setProjectsData] = useState(null)
  const [eventData, setEventData] = useState(null)

  const fetchInitialLandingPageData = async () => {
    try {
      const eventDataRequest = await axios.get('/api/events')
      console.log('inintial fetch test')
      // const projectsDataRequest = await axios.get('/api/projects')
      setEventData(eventDataRequest.data)
      // setProjectsData(projectsDataRequest.data)
      console.log('setting event data in landing page as: ', eventDataRequest.data)
      // console.log('setting project data in landing page as: ', projectsDataRequest.data)
    } catch(err){
      console.log('there was an error: ', err)
    }

  }


  useEffect(() => {
    console.log('fetching initial data')
    //fetchInitialLandingPageData()
    console.log('data fetch should be done')
  }, [])

  const projectCarouselCards = [{src: './img/midnight-weed.jpg', alt: 'midnight west weed fest 2019'}, {src: './img/midnightZfest.jpg', alt: 'midnight west zombie fest 2019'}, {src: './img/mwf-2020.jpg', alt: 'midnight west fest 2020'}, {src: './img/mwf2021.jpg', alt: 'midnight west fest 2021'}]

  return (
    <>
      <section className='landing-page-wrapper'>
        <section className='landing-page-company-banner landing-page-banner'>MIDNIGHT WEST PRODUCTIONS</section>
        <section className='landing-page-event-section'>
          <section className='landing-page-event-banner landing-page-banner'>EVENTS</section>
          <section className='landing-page-featured-event'>
            <img src='/img/mwf2021.jpg' alt='midnight west fest 2021' className='landing-page-event-banner-image' />
            <Link to='filmfreeway.com/MidnightWestFest'><img src='/img/filmFreeway-button.jpg' alt='midnight west film freeway button' /></Link>
          </section>
        </section>
        <section className='landing-page-projects-section'>
          <p className='landing-page-projects-section-subbanner'>see what we have been stirring up</p>
          <Carousel data={projectCarouselCards} />
        </section>
        <section className='landing-page-call-to-action-section'>
          <section className='landing-page-call-to-action-section-text'>

          </section>
          <section className='landing-page-call-to-action-section-image'>

          </section>
        </section>
      </section>
    </>
    
  )
}

export default Tester