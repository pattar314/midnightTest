import React from 'react'
import PageSection from './PageSection';
import PageSubSection from './PageSubSection';
import Slideshow from './Slideshow';
import Card from './Card';
import { projectCards, eventCards } from './data'
import {sponsors} from './data';



const Homepage = (props) => {


        return (
            <div>
                <PageSection 
                title="MIDNIGHT WEST PRODUCTIONS"
                extraStyles="companyBanner"
                />
                <PageSection 
                title="EVENTS"
                />
                {
                eventCards ? eventCards.map((card, key) =>
                <>
                    <img className='featured-image-homepage current-event' src={require('/public/img/' + eventCards[0].src)} />
                    
                    <a className='film-freeway-button' href={sponsors[0].link}>
                        <img className='film-freeway-image' src={require('/public/img/' + sponsors[0].logo)} alt={sponsors[0].name} />
                    </a>
                    </>
                    ) : <PageSubSection 
                    body="More events in the works"
                    extraStyles="sectionSubBanner"
                    />
                }
                <PageSection 
                title="Projects"
                />
                <PageSubSection
                extraStyles="slide-section"
                psExtra="slide-extra">
                <Slideshow
                cards={projectCards}
                extraStyles="projectSlideshow"
                 />
                </PageSubSection>
            </div>
        )
}

export default Homepage
