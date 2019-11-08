import React from 'react';
import styled from 'styled-components';


const ThumbDiv = styled.div`
  height: 100%;
  width: 100%;
  @media(max-width: 768px){}
  padding: 5px;
  outline: 2px solid white;
  outline-offset: -5px;
  display: flex;
  border: ${ props => props.isActive ? ("1px solid black") : ("0")};
  &:hover{
    filter: brightness(0.8);
    cursor: pointer;
  }

  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;

const ItemImageThumb = ({img, index, handleClick, activeIndex}) => {
  return (
    <ThumbDiv isActive={index===activeIndex}>
      <img onClick={handleClick} data-index={index} src={img} alt="" />
    </ThumbDiv>
  )
}


export default ItemImageThumb
