
import styled from 'styled-components';

export const FeaturedItemsMobileBtn = styled.button`
  display: none;
  @media(max-width: 768px){
    z-index: 6;
    display: block;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    width: 50%; height: 50px;
    position: fixed; bottom: 0;
    padding-right: 35px;

    font-family: 'Oswald', sans-serif;
    text-align: right;
    color: black;
    border: 1px solid black;
    background: white;
    outline: none;
    &:active{ background: lightgrey; }
  }
`;

export const FeaturedWrapper = styled.div`
  display: flex; flex-direction: column;
  
`;
export const Header = styled.h2`
padding-top: 55px;
margin: 0px 0 50px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
`;

export const FeaturedBody = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 50px 1fr 50px; /* button body button = screen view only*/
  grid-auto-rows: 250px;
  justify-content: center;
  padding-bottom: 5px;

  @media(max-width: 768px){
    overflow-x: scroll;
    grid-template-columns: 1fr; /* no buttons, just body = mobile view */
    &.moveActive{
      transform: scale(0.95);
      transition: transform 175ms ease;
    }
  }
`;
export const FeaturedArrow = styled.div`
  overflow: hidden;
  z-index: 2;
  opacity: ${props => props.visible ? ("0") : ("1")};
  border: 1px solid black; border-radius: 2px;
  box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  transition: opacity 125ms ease;

  @media(max-width: 768px){ 
    display: none; 
  }
  
  button{
    display: grid; align-items: center;
    width: 100%; height: 100%;
    border: 0;
    background: white;
    transition: all 250ms ease;
    i{
      transform: translateX(0px);
      font-size: 3.25em;
      transition: transform 250ms ease;
    }
    &:hover{ cursor: pointer; }

    &[disabled]{
      cursor: default;
      i{
        transform: translateY(50px);
        transition: all 250ms ease;
      }
    }
  }
`;

// Content
export const FeaturedProducts = styled.div`
  display: grid; 
  justify-content: center;
  transition: transform 200ms ease;
  position: relative;
  /* using transformX on this component */

  @media(max-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
`;
export const Card = styled.div`
  width: calc( ${props => props.featureWidth+'px'} - 20px ); 
  position: absolute; top: 0; left: 0;
  margin-left: 10px;
  height: 100%;
  
  display: grid; grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr;
  align-items: center;

  @media(max-width: 768px){
    border: 0;
    padding: 0 2.5px;
  }
  img{
    width: 100%; height: 100%; object-fit: cover;
    padding: 5px;
    box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  }
`;
export const CardItemDesc = styled.div`
  display: grid; grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  height: 100%;
`;
export const CardItemName = styled.div`
  text-align: center;
`;
export const CardItemValue = styled.div`
  text-align: center;
`;