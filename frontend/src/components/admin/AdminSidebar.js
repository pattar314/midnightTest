import React from 'react'

const AdminSidebar = () => {
  return (
    <section className='admin-main-wrapper'>
    <section className='admin-sidebar-menu'>
    <Link href='/' className='main-navigation-logo-wrapper'><img className='main-navigation-logo' src='\img\MWP-Business-Logo-White-smaller.jpg' alt='windnight west logo'></img></Link>
    <Link href='/admin/landingPage' className='main-navigation-button' >Landing Page</Link>
    <Link href='/admin/events' className='main-navigation-button' >Events</Link>
    <Link href='/admin/services' className='admin-navigation-button' >Services</Link>
    <Link href='/admin/projects' className='admin-navigation-button' >Projects</Link>
    <Link href='/admin/sponsors' className='admin-navigation-button' >Sponsors</Link>
    <Link href='/admin/contact' className='admin-navigation-button' >Contact Us</Link>
    </section>
  </section>
  )
}

export default AdminSidebar

