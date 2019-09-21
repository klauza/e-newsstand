import React, { useState } from 'react'
import styled from 'styled-components';
import Item_Image_Active from './Item_Image_Active';
import Item_Image_Thumbails from './Item_Image_Thumbails';

const GalleryContainer = styled.div`
  border: 2px solid black;
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

      <Item_Image_Active key={activeIndex} activeThumbnail={images[activeIndex]} arrowClick={arrowClick}/>
      <Item_Image_Thumbails imgs={images} handleClick={handleClick} />

    </GalleryContainer>

  )
}

export default Item_Image_Gallery
