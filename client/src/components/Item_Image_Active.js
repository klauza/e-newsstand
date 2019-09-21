import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: 65%;
  width: 100%;
  background: #333;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LeftArrow = styled.button`
  position: absolute; top: 0; left: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px;
  border: 1px solid yellow;
  outline: 0;
  &:hover{
    background: rgba(0,0,0,0.25);
  }

  i{
    position: absolute; top: 50%; left: 50%; transform: translateX(-50%);
    font-size: 1.85em;
  }
`;
const RightArrow = styled.button`
  position: absolute; top: 0; right: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px;
  border: 1px solid yellow;
  outline: 0;
  &:hover{
    background: rgba(0,0,0,0.25);
  }

  i{
    position: absolute; top: 50%; right: 50%; transform: translateX(50%);
    font-size: 1.85em;
  }
`;

const ActiveThumbnailWindow = ({activeThumbnail, arrowClick}) => {
  return (
    <Container>
      <LeftArrow onClick={()=>arrowClick("left")}><i className="fa fa-chevron-left"></i></LeftArrow>
      <RightArrow onClick={()=>arrowClick("right")}><i className="fa fa-chevron-right"></i></RightArrow>

      <Image src={activeThumbnail} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
    </Container>
  )
}



export default ActiveThumbnailWindow
