import React, { useEffect } from 'react';
import { projectCards, eventCards } from './data';
import Card from './Card';
import PageSection from './PageSection';
import Slideshow from './Slideshow';

const Projects = (props) => {



    
        let currentProject = <Card
            src={projectCards[0].src}
            name={projectCards[0].name}
            description={projectCards[0].description}
            wrapperClasses={'current-project'}
            key={0}
            />


    
    let current = 'true'


    return (

        <div className='Projects-wrapper'>               
        <PageSection
        extraStyles='page-banner'
        title='PROJECTS'
         />

           { current ? 
            <div className='upcoming-projects'>
                <h1 style={{textAlign: "center"}}>Upcoming Projects</h1>
                <div className='vertical-card-wrapper'>
                    {currentProject}
                </div>
                <div className='film-freeway-button'></div> 
            </div>
           :  <></>
           }

            <div className='previous-projects'>
               <h1>Previous Projects</h1>
               <div className='horizontal-card-wrapper'>
                   <Slideshow cards={projectCards.slice(1,)} wrapperClasses="project-slideshow" />
               </div>
            </div>
        </div>
    )
}

export default Projects;