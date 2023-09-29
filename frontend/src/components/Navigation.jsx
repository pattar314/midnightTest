import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import './styles/navigationStyles.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const [expanded, setExpanded] = useState(true)
  const [status, setStatus] = useState('hidden')




  const expandMobileMenu = async () => {
    setExpanded(!expanded)
    if(expanded === true){
      setStatus('block')
    } else if(expanded === false){
      setStatus('none')
    } else{
      console.log('an error has occured in mobile expansion')
    }

    console.log('expanded: ', expanded)
    console.log('status:', status)
  }

  return (
    <nav className='main-navigation'>
      <Link to='/' className='main-navigation-logo-wrapper'> <img className='main-navigation-logo' src='\img\MWP-Business-Logo-White-smaller.jpg' alt='windnight west logo' /></Link>
      <FontAwesomeIcon icon={faChevronDown} className='main-navigation-menu-expand-button' onClick={expandMobileMenu} />
      <Link to='/events' style={{display: `${status}`}} className='main-navigation-button' onClick={expandMobileMenu}  >Events</Link>
      <Link to='/services' style={{display: `${status}`}} className='main-navigation-button' onClick={expandMobileMenu}  >Services</Link>
      <Link to='/projects' style={{display: `${status}`}} className='main-navigation-button' onClick={expandMobileMenu}  >Projects</Link>
      <Link to='/Sponsors' style={{display: `${status}`}} className='main-navigation-button' onClick={expandMobileMenu}  >Sponsors</Link>
      <Link to='/contact' style={{display: `${status}`}} className='main-navigation-button' onClick={expandMobileMenu}  >Contact Us</Link>
    </nav>
  )
}

export default Navigation