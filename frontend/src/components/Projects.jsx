import React, { useState } from 'react'

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null)
  return (
    <>
      <section className='projects-banner'>Projects</section>
      <section className='projects-featured-projects'></section>
      <section className='projects-past-filming'></section>
      <section className='projects-past-events'></section>
    </>
    
  )
}

export default Projects