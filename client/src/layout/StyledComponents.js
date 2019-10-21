import React from 'react';
import styled from 'styled-components';
import history from '../history';

// Wrapper
const WrapperStyled = styled.div`
  position: absolute;
  top: 60px;
  left: 0; right: 0;
  
  width: 70%;
  margin: 50px auto 50px;
  padding: 0 10px 50px 10px;
  /* background: white; */
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ 
    width: 100%; 
    padding: 0 0px 50px 0px;
  }
`;
const ChildOfWrapper = styled.div` /* non-absolute Wrapper */
  width: 70%;
  margin: 50px auto 50px;
  padding: 0 0px 50px 0px;
  /* background: white; */
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 100%; }
`;

// Button
const ButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid grey; border-radius: 2px;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6); 
  background: lightgrey;
  transition: box-shadow 175ms ease, border 175ms ease;
  font-size: 2.25em;
  @media(max-width:768px){
    background: black; color: white;
    border: 1px solid white;
    position: sticky; top: 50px;
    padding: 0; width: 50px; height: 50px;
    z-index: 5;
  }
  &:hover{
    cursor: pointer;    
    /* transition: box-shadow 175ms ease, border 175ms ease;
    box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.7); */
  }
  &:active{
    background: grey;
  }
`;

// BackButton
const BackButtonStyled = styled(ButtonStyled)`

`;

// SearchForm
const SearchFormStyled = styled.form`
    display: none;
  @media(max-width:768px){
    display: block;
    box-shadow: 0px -4px 4px -3px rgba(0,0,0,0.6); 
    position: fixed; bottom: 0; left: 0;
    width: 100%;
    z-index: 2;
  }
  .main-input{
    @media(max-width:768px){
      width: 100%;
      padding: 12.5px 50px; 
      border: 1px solid white;
      background: black;
    }
  } 
  i{
    @media(max-width: 768px){
      position: absolute;
      color: #5fa8d3;
      transform: translate(50px,-50%);
      top: 50%; left: 17.5px;
      transform: translate(0px, -50%);
      color: white;
      font-size: 1.25em;
    }
  }

  input[type=text]{
    @media(max-width: 768px){
      color: black;
      border: 1px solid white;
      color: white;
      font-size: 1.15em;
      &:focus{outline: 0; border: 1px solid white;}
    }
  }
  input[type=submit]{
    @media(max-width: 768px){    
      position: absolute; bottom: 0; right: 0;
      color: white;
      border: 1px solid black;
      background: rgba(45,98,110, 0.7);
      height: 100%; width:50px;
      border: 0;
      border-left: 1px solid white;
      border-bottom: 1px solid white;
      border-top: 1px solid white;
    }
    &:hover{
      cursor: pointer;
      background: rgba(45,98,110, 0.95);
    }
  }
`; 


// Functions
const goBackOnePage = () => {
  history.goBack();
}


// Elements
export const Wrapper = (props) => {
  return (
    <WrapperStyled {...props}>
      {props.children}
    </WrapperStyled>
  )
}
export const ChildWrapper = (props) => {
  return (
    <ChildOfWrapper>
      {props.children}
    </ChildOfWrapper>
  )
}
export const Button = (props) => {
  return(
    <ButtonStyled {...props}>{props.children}</ButtonStyled>
  )
}
export const BackButton = (props) => {
  return (
    <BackButtonStyled onClick={goBackOnePage}>{props.children}</BackButtonStyled>
  )
}
export const SearchForm = (props) => {
  return(
    <SearchFormStyled {...props}>{props.children}</SearchFormStyled>
  )
}