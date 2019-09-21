import React from 'react';
import styled from 'styled-components';
import history from '../history';

// Styles
const WrapperStyled = styled.div`
  width: 70%;
  margin: 50px auto 50px;
  padding: 0 10px 50px 10px;
  /* background: white; */
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 95%; }
`;
const ButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid grey; border-radius: 2px;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6); 
  background: lightgrey;
  transition: box-shadow 175ms ease, border 175ms ease;
  &:hover{
    cursor: pointer;    
    transition: box-shadow 175ms ease, border 175ms ease;
    border: 1px solid black;
    box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.7);
  }
  &:active{
    background: grey;
  }
`;
const BackButtonStyled = styled(ButtonStyled)`

`;


// Functions
const goBackOnePage = () => {
  history.goBack();
}


// Elements
export const Wrapper = (props) => {
  return (
    <WrapperStyled>
      {props.children}
    </WrapperStyled>
  )
}
export const Button = (props) => {
  return(
    <ButtonStyled>{props.children}</ButtonStyled>
  )
}
export const BackButton = (props) => {
  return (
    <BackButtonStyled onClick={goBackOnePage}>{props.children}</BackButtonStyled>
  )
}