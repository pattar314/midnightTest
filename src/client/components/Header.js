import React, { useState, useEffect } from 'react'
import HeaderElement from './HeaderElement'
import mwLogo from './../../assets/mwLogoFix1.png'
import { ArrowDropDown } from '@material-ui/icons'


const Header = (props) => {

    const [menuVis, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(false)
        if(window.matchMedia("(max-width: 500px)").matches) {
            console.log('we are on mobile')
            const headerElements = document.getElementsByClassName('header-element');
            for(let el of headerElements){
                el.addEventListener('click', changeVisibility)
            }
        } else {
            console.log('we are on a non-mobile device')
        }
        
        
    }, [])
    
    
    
    
    let vis = true
    
    const changeVisibility = () => {
        const menu = document.getElementsByClassName('menu-list')[0]
        menu.style.display = vis ? 'flex' : 'none';
        vis = !vis
        console.log('vis: ', vis)
    }

    
        

    return (
        <div className="header-container">
            <a href="/" className="header-logo">
                <img src={mwLogo} alt="midnight west logo" className='logo'></img>
            </a>
            <div className='dropdownArrow' onClick={changeVisibility}><ArrowDropDown /></div>
            <div className='menu-list'>
                {props.headerData.map( (element, index) => 
                <HeaderElement
                title={element.body}
                link={element.link}
                key={index}
                 />
                )}
            </div>
            
        </div>
    )
}

export default Header

