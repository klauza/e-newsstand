import React, { useState } from 'react'
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

const Item_Image_Gallery = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index');
    setActiveIndex(parseInt(newActiveIndex, 10));
  }

  const arrowClick = (direction) => {
    if(direction === "left"){
      let newActiveIndex = activeIndex - 1;
      if(newActiveIndex === -1){
        newActiveIndex = images.length-1;
      }
      setActiveIndex(newActiveIndex);
    }

    if(direction === "right"){
      let newActiveIndex = activeIndex + 1;
      if(newActiveIndex === images.length){
        newActiveIndex = 0;
      }
      setActiveIndex(newActiveIndex);
    }
  }

  return (

    <GalleryContainer>

      <ItemImageActive key={activeIndex} activeThumbnail={images[activeIndex]} arrowClick={arrowClick}/>
      <ItemImageThumbails activeIndex={activeIndex} imgs={images} handleClick={handleClick} />

    </GalleryContainer>

  )
}

export default Item_Image_Gallery
