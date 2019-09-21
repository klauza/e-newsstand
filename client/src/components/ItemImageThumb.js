import React from 'react';
import styled from 'styled-components';


const ThumbDiv = styled.div`
  height: 50%;
  width: 12.5%;
  @media(max-width: 768px){width: 25%; }
  padding: 5px;
  outline: 2px solid white;
  outline-offset: -5px;
  display: flex;
  &:hover{
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

const ItemImageThumb = ({img, index, handleClick}) => {
  return (
    <ThumbDiv>
      <img onClick={handleClick} data-index={index} src={img} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
    </ThumbDiv>
  )
}


export default ItemImageThumb
