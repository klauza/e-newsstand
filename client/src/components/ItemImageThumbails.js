import React from 'react';
import ItemImageThumb from './ItemImageThumb';
import styled from 'styled-components';

const GridContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ItemImageThumbails = ({imgs, handleClick}) => {
  return (
    <GridContainer>
      
      {imgs.map((img, index) => {
        return <ItemImageThumb key={index} img={img} index={index} handleClick={handleClick} />
      })}
      
    </GridContainer>
  )
}

export default ItemImageThumbails
