
import { Route, Routes } from 'react-router';
import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactUs from './components/ContactUs';
import Tester from './components/Tester'

const  App = () => {


  const [eventData, setEventData] = useState(null)
  const [servicesData, setServicesData] = useState(null)
  const [projectsData, setProjectsData] = useState(null)
  const [sponsorsData, setSponsorsData] = useState(null)


  return (
    <div className="app-wrapper">
     <Navigation />
     <section className='app-content-area-wrapper'>
        <Routes className='content-area'>
          <Route path='/test' element={<Tester />} />
        </Routes>
     </section>

     <Footer />
      
    </div>
  );
}

export default App;


{/* <Route path='/contact' element={<ContactUs />} />
<Route path='/' element={<LandingPage />} /> */}