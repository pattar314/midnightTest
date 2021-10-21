import React from 'react'
import PageSection from './PageSection';


const Services = () => {
    
return (
        <>
        <PageSection
        extraStyles='page-banner'
        title='Services'
         />
        
        <div className='services-content'>  
            <div className='service filming-service'><b>
                <h1>Filming</h1>
                <div className='service-pricing'>
                    <p>Commercials under 2 minutes - $350</p><br/>
                    <p>Up to 6 hour event (weddings included) -$500</p><br/>
                    <p>Memorial videos unlimited pictures, digital or physical - $150</p><br/>
                </div></b> 
            </div>
            <div className='service editing-service'><b>
                <h1>Editing</h1>
                <div className='service-pricing'>
                    <p>$100/hr</p>
                    <p>Includes audio balance, color balance, digital copies, and up to 5 dvd or blueray copies</p>
                </div>
            </b></div>
        </div>
                
        </>
        )
}

export default Services
