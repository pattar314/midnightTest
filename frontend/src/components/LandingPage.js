import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LandingPage = () => {

  const [events, setEvents] = useState([])

  // const 
  // console.log('data: ', fetchData.data)

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const fetchedData = await axios.get('/events')
    setEvents(fetchedData.data)
  }

  console.log('landing page events: ', events)

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