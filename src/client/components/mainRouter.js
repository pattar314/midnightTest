import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import Services from './Services';
import Projects from './Projects';
import Events from './Events';
import Sponsors from './Sponsors';
import ContactPage from './ContactPage';
import { headerCards, social } from './data';
import Header from './Header';
import Footer from './Footer';




const MainRouter = () => {
    
    const [state, setState] = useState ({
    headerComponents: headerCards,
    facebook: social[0],
    instagram: social[1],
    youtube: social[2],
    rss: 'https://anchor.fm/patrick-thurston'
  })

    return(
        <>
    <Header headerData={state.headerComponents} />
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/sponsors' component={Sponsors} />
        <Route exact path='/contact' component={ContactPage} />
    </Switch>
    <Footer
        facebook={state.facebook}
        instagram={state.instagram}
        youtube={state.youtube}
        rss={state.rss}
        />
        </>
    )
}

export default MainRouter



