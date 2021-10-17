import React from 'react'
import { Facebook, Instagram, RssFeed, YouTube } from '@material-ui/icons'

const SocialBar = (props) => {
    return (
            
        <div className='social-wrapper'>
            <a href={props.facebook["link"]} target="_blank" className='social-icon'><Facebook /></a>
            <a href={props.youtube["link"]} target="_blank" className='social-icon'><YouTube /></a>
            <a href={props.instagram["link"]} target="_blank" className='social-icon'><Instagram /></a>
            <a href={props.rss} target="_blank" className='social-icon'><RssFeed /></a>
        </div>
            
    )
}

export default SocialBar
