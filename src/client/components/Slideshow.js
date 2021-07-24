import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Card from './Card';

 

const Slideshow = (props) => {

        let [cardIndex, setCardIndex] = useState(0);
        let [show, setShow] = useState(0);
        
        let cards = props.cards
            .map((card, index) => 
                <Card
                src={card.src}
                name={card.name}
                key={index}
                />
            );
            
            
        
      
        useEffect(() => {
              setDisplay()
        }, [])

        let setDisplay = () => {
            window.matchMedia("(max-width: 500px)").matches ? setShow(<div className='slide-cards'>{cards[cardIndex]}</div>): setShow(<div className='slide-cards'>{cards[cardIndex]} {cards[cardIndex+1]}</div>)
        }

        
            
        const handleCarouselButton = (direction) => {
            
            if(direction === -1){
                setCardIndex(cardIndex += direction);
                if(cardIndex < 0 ){
                    setCardIndex(cards.length)
                }
            }
            else if(direction === 1){
                setCardIndex(cardIndex += direction);
                if(cardIndex > cards.length - 2 ){
                    setCardIndex(-1);
                }
            }
            console.log(cardIndex)
            setDisplay()
        }

        
        
            

        return (
            <div className='slideshow-container'>
            <button className='slide-left slideshow-button' onClick={() => handleCarouselButton(-1) }><ChevronLeft /></button>
                { show }
            <button className='slide-right slideshow-button' onClick={() => handleCarouselButton(1)}><ChevronRight /></button>
            </div>
        )
}

export default Slideshow
