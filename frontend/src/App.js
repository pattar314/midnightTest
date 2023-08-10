
import { Route, Routes } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactUs from './components/ContactUs';
import Events from './components/Events';

const  App = () => {
  return (
    <div className="app-wrapper">
     <Navigation />
     <section className='test'>
        <Routes className='content-area'>
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
     </section>

     <Footer />
      
    </div>
  );
}

export default App;