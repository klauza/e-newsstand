import React from 'react';
import Item_Image_Thumb from './Item_Image_Thumb';
import styled from 'styled-components';

const GridContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ThumbnailGrid = ({imgs, handleClick}) => {
  return (
    <GridContainer>
      
      {imgs.map((img, index) => {
        return <Item_Image_Thumb key={index} img={img} index={index} handleClick={handleClick} />
      })}
      
    </GridContainer>
  )
}

export default ThumbnailGrid
