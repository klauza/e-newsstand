import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemImageActive from './ItemImageActive';
import ItemImageThumbails from './ItemImageThumbails';

const GalleryContainer = styled.div`
  /* border: 2px solid black; */
  display: grid; 
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 500px;
  @media(max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 300px 200px;
  }
`;



const ItemImageGallery = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('')

  const handleClick = (e) => {
    let currentIndex = activeIndex;

    let newActiveIndex = e.target.getAttribute('data-index');
    setActiveIndex(parseInt(newActiveIndex, 10));
    
    if(currentIndex < newActiveIndex){
      // animate right
      setAnimationDirection('right');
    } else{
      // animate left
      setAnimationDirection('left');
    }
  }

  const arrowClick = (direction) => {
    let newActiveIndex;

    if(direction === "left"){
      newActiveIndex = activeIndex - 1;
      if(newActiveIndex === -1){
        newActiveIndex = images.length-1;
      }
      setActiveIndex(newActiveIndex);
      setAnimationDirection('left'); // animate left
    }

    if(direction === "right"){
      newActiveIndex = activeIndex + 1;
      if(newActiveIndex === images.length){
        newActiveIndex = 0;
      }
      setActiveIndex(newActiveIndex);
      setAnimationDirection('right'); // animate right
    }


  }


  return (

    <GalleryContainer>

      <ItemImageActive animationDirection={animationDirection} imgCount={images.length} active={activeIndex} activeThumbnail={images[activeIndex]} arrowClick={arrowClick}/>
      <ItemImageThumbails activeIndex={activeIndex} imgs={images} handleClick={handleClick} />

    </GalleryContainer>

  )
}

ItemImageActive.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}

export default ItemImageGallery
