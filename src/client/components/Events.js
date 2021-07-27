import React, { useEffect } from 'react';
import {  eventCards } from './data';
import Card from './Card';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Events = (props) => {



    
        let currentEvent = <Card
            src={eventCards[0].src}
            name={eventCards[0].name}
            description={eventCards[0].description}
            wrapperClasses={'current-event'}
            key={0}
            />


    
    let current = 'true'


    return (

        <div className='events-wrapper'>               
        <PageSection
        extraStyles='page-banner'
        title='EVENTS'
         />

           { current ? 
            <div className='upcoming-events'>
                <h1>Upcoming Events</h1>
                <div className='vertical-card-wrapper'>
                    {currentEvent}
                </div>
                <div className='film-freeway-button'></div> 
            </div>
           :  <></>
           }

            <div className='previous-events'>
               <h1>Previous Events</h1>
               <div className='horizontal-card-wrapper'>
                   <Slideshow cards={eventCards.slice(1,)} wrapperClasses="project-slideshow" />
               </div>
            </div>
        </div>
    )
}

export default Events;