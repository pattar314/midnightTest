import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './styles/carouselStyles.css'


const Carousel = ({data}) => {

  const [carouselCounter, setCarouselCounter] = useState(0)



  const carouselCards = data.map((d, index) => (
    <section className='carousel-card-wrapper' key={index}>
      <img className='carousel-card-image' src={d.src} alt={d.alt} />
    </section>)
  )

  const carouselLength = carouselCards.length

  if (carouselCounter === carouselLength){
    setCarouselCounter(0)
  } else if (carouselCounter === -1){
    setCarouselCounter(carouselLength -1)
  }

  const carouselMovement = async (direction) => {
    setCarouselCounter(carouselCounter + direction)
    if(carouselCounter <= -1 ){
      setCarouselCounter(carouselLength - 2)
    } 
    else if(carouselCounter >= carouselLength){
      setCarouselCounter(0)
    }

    console.log('carousel counter: ', carouselCounter)
    
  }

  const renderCard = (index) => {
    console.log('trying to render card ', index)
    if(index <= -1 ){
      console.log('too far back')
      index = carouselLength
    }  else if(index >= carouselLength){
        index = 0
    }
    
    console.log('rendered card: ', carouselCards[index])
    return carouselCards[index]
    
  }

  // console.log('length: ', carouselCards[carouselLength - 1])


  return (
    <>
      <section className='carousel-wrapper'>
        <button onClick={() => carouselMovement(-1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <span>{renderCard(carouselCounter)}</span><span>{renderCard(carouselCounter + 1)}</span>
        <button onClick={() => carouselMovement(1)}><FontAwesomeIcon icon={faChevronRight} /></button>
      </section>
    </>

  )
}

export default Carousel





