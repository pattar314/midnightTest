import React from 'react'
import axios from 'axios'

const LandingPage = async () => {

  const [servicesData, setServicesData] = useState(null)
  const [projectsData, setProjectsData] = useState(null)
  const [eventData, setEventData] = useState(null)
  const [sponsorsData, setSponsorsData] = useState(null)

  const fetchInitialLandingPageData = async () => {
    const eventData = await axios.get('/api/events')
    const projectsData = await axios.get('/api/projects')
  }

/*   const data = await axios.get('/events')
  console.log('data: ', data) */

  return (
    <>
      <section className='landing-page-company-banner'></section>
      <section className='landing-page-featured-event'></section>
      <section className='landing-page-project-carousel'></section>
      <section className='landing-page-call-to-action'></section>
    </>

  )
}

export default LandingPage