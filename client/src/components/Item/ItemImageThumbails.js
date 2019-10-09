import React from 'react';
import PropTypes from 'prop-types';
import ItemImageThumb from './ItemImageThumb';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-rows: 100px;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ItemImageThumbails = ({imgs, handleClick, activeIndex}) => {
  return (
    <GridContainer>
      
      {imgs.map((img, index) => {
        return <ItemImageThumb key={index} img={img} activeIndex={activeIndex} index={index} handleClick={handleClick} />
      })}
      
    </GridContainer>
  )
}

ItemImageThumb.propTypes = {
  img: PropTypes.string,
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  handleClick: PropTypes.func
}

export default ItemImageThumbails
