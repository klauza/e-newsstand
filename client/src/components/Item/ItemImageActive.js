import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #333;
  position: relative;
`;
const Image = styled.img`
  display: block;
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

const LeftArrow = styled.button`
  position: absolute; top: 0; left: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px; 
  @media(max-width: 768px){ width: 60px; }
  /* border: 1px solid yellow; */
  border: 0;
  outline: 0;
  &:hover{
    cursor: pointer;
    background: rgba(0,0,0,0.25);
  }

  i{
    color: white;
    text-shadow: 2px 2px 2px #000;
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    font-size: 1.85em;
  }
`;
const RightArrow = styled.button`
  position: absolute; top: 0; right: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px;
  @media(max-width: 768px){ width: 60px; }
  /* border: 1px solid yellow; */
  border: 0;
  outline: 0;
  &:hover{
    cursor: pointer;
    background: rgba(0,0,0,0.25);
  }

  i{
    color: white;
    text-shadow: 2px 2px 2px #000;
    position: absolute; top: 50%; right: 50%; transform: translate(50%, -50%);
    font-size: 1.85em;
  }
`;

const ItemImageActive = ({activeThumbnail, arrowClick}) => {
  return (
    <Container>
      <LeftArrow onClick={()=>arrowClick("left")}><i className="fa fa-chevron-left"></i></LeftArrow>
      <RightArrow onClick={()=>arrowClick("right")}><i className="fa fa-chevron-right"></i></RightArrow>

      <Image src={activeThumbnail} alt="active-image" />
    </Container>
  )
}



export default ItemImageActive
