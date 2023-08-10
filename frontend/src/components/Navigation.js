import React from 'react'
import './styles/navigationStyles.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='main-navigation'>
      <Link to='/' className='main-navigation-logo-wrapper'><img className='main-navigation-logo' src='\img\MWP-Business-Logo-White-smaller.jpg' alt='windnight west logo'></img></Link>
      <Link to='/events' className='main-navigation-button' >Events</Link>
      <Link to='/services' className='main-navigation-button' >Services</Link>
      <Link to='/projects' className='main-navigation-button' >Projects</Link>
      <Link to='/Sponsors' className='main-navigation-button' >Sponsors</Link>
      <Link to='/contact' className='main-navigation-button' >Contact Us</Link>
    </nav>
  )
}

export default Navigation