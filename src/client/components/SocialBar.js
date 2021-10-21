import React from 'react'
import { Facebook, Instagram, RssFeed, YouTube } from '@material-ui/icons'

const SocialBar = (props) => {
    return (
            
        <div className='social-wrapper'>
            <a href={props.facebook["link"]} target="_blank" className='social-icon' onclick="window.open(this.href,'_blank');return false;" ><Facebook /></a>
            <a href={props.youtube["link"]} target="_blank" className='social-icon' onclick="window.open(this.href,'_blank');return false;" ><YouTube /></a>
            <a href={props.instagram["link"]} target="_blank" className='social-icon' onclick="window.open(this.href,'_blank');return false;" ><Instagram /></a>
            <a href={props.rss} target="_blank" className='social-icon' onclick="window.open(this.href,'_blank');return false;" ><RssFeed /></a>
        </div>
            
    )
}

export default SocialBar
