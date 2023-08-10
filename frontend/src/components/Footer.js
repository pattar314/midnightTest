
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRss } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './styles/footerStyles.css'
import { Link } from 'react-router-dom'

const Footer = () => {


  return (
    <section className="footer-wrapper">
      <section className="footer-content">
        <Link to='https://www.facebook.com/midnightwestproductions' target='_blank' rel='noreferrer' className='footer-icon-wrapper' > <FontAwesomeIcon className='footer-icon' icon={faFacebook} /></Link>
        <Link to='https://www.instagram.com/midnightwestproductions/' target='_blank' rel='noreferrer' className='footer-icon-wrapper' > <FontAwesomeIcon className='footer-icon' icon={faInstagram} /></Link>
        <Link to='https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw' target='_blank' rel='noreferrer' className='footer-icon-wrapper' > <FontAwesomeIcon className='footer-icon' icon={faYoutube} /></Link>
        <Link to='/feed' target='_blank' className='footer-icon-wrapper' > <FontAwesomeIcon className='footer-icon' icon={faRss} /></Link>
      </section>
    </section>
  )
}

export default Footer