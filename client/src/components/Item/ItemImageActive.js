import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #333;
  position: relative;
  overflow: hidden;
  .active-img-animations{
    .img-anim-enter {
      z-index: 1;opacity: 0; transform: translateY(-25px) translateX(100px) rotate(15deg) scale(0.85);
      
      
    }
    .img-anim-enter.img-anim-enter-active {
      transform: translateY(0) translateX(0px) rotate(0deg) scale(1);
      opacity: 1;
      transition: opacity 300ms linear 200ms, transform 300ms ease-out 200ms;
    }

    .img-anim-exit {
      transform: translateY(0);
      opacity: 1;
    }

    .img-anim-exit.img-anim-exit-active {
      transform: translateY(25px) translateX(-100px) rotate(-15deg) scale(0.85);
      opacity: 0;
      transition: opacity 300ms linear, transform 300ms ease-in;   
        
    }
    .img-anim-exit-done{
      opacity: 0;
    }
  }
`;
const Image = styled.img`
  display: block;
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const LeftArrow = styled.button`
  z-index: 2;
  position: absolute; top: 0; left: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px; 
  @media(max-width: 768px){ width: 60px; }
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
  z-index: 2;
  position: absolute; top: 0; right: 0;
  background: rgba(0,0,0,0);
  height: 100%;
  width: 100px;
  @media(max-width: 768px){ width: 60px; }
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
const ImageCounter = styled.div`
  width: 50%; text-align: center;
  background: linear-gradient(
    to right,
  rgba(0,0,0,0) 0%,
  rgba(0,0,0,0.35) 25%,
  rgba(0,0,0,0.35) 75%,
  rgba(0,0,0,0) 100% );
  color: white;
  z-index: 1;
  position: absolute;
  bottom: 10px; left: 50%; transform: translateX(-50%);
`;

const ItemImageActive = ({imgCount, active, activeThumbnail, arrowClick}) => {
  return (
    <Container>
      <LeftArrow onClick={()=>arrowClick("left")}><i className="fa fa-chevron-left"></i></LeftArrow>
      <RightArrow onClick={()=>arrowClick("right")}><i className="fa fa-chevron-right"></i></RightArrow>
     
      <TransitionGroup className="active-img-animations">
        <CSSTransition
          key={active}
          timeout={600}
          classNames="img-anim"
        >
          <Image src={activeThumbnail} alt="active-image" />
        </CSSTransition>
      </TransitionGroup>
        
      <ImageCounter>{active+1} of {imgCount} </ImageCounter>
    </Container>
  )
}



export default ItemImageActive
