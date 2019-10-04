import React from 'react';
import styled from 'styled-components';
import history from '../history';

// Styles
const WrapperStyled = styled.div`
  position: absolute;
  top: 60px;
  left: 0; right: 0;
  
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
const SearchFormStyled = styled.form`
  text-align: center;
  width: 30%; height: 100%;
  position: relative;
  margin: 0 auto; 
  overflow: hidden;
  .main-input{
    width: 100%;
    overflow: hidden;
    display: block;
    padding: 5px 0 5px 30px;
    border: 0; 

    &:focus ~ .label-name{
      border: 2px solid rgba(45,98,110, 1);
    }
    &:focus ~ .label-name::after{
      transform: translateX(0%);
    }
    &:focus ~ .label-name::before{
      transform: translateX(0%);
    }
    &:focus ~ i{
      transform: translate(0px, -50%);
    }
  } 
  i{
    color: #5fa8d3;
    transition: all 0.3s ease;
    position: absolute;
    top: 50%; left: 5px;
    transform: translate(-40px, -50%);
  }
  .label-name{
    border: 1px solid rgba(0,0,0,0.25);
    transition: border 300ms ease;
    position: absolute; bottom: 0px; left: 0%;
    width: 100%; height: 100%;
    pointer-events: none;

    &::after, ::before{
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      /* background: red; */
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }
    &::before{
      right: 0; top: 1px;
    }
    &::after{
      left: 0; bottom: -1px;
    }
    span{
      position: absolute;
      bottom: 2.5px; left: 0px;
      transition: all 0.3s ease;
    }
  }
  input[type=text]{
    color: black;
  }
  input[type=submit]{
    position: absolute; bottom: 0px; right: 0%;
    color: white;
    height: 25px;
    padding: 0 5px;
    border: 1px solid black;
    background: rgba(45,98,110, 0.7);
    transition: background-color 225ms ease;
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
export const SearchForm = (props) => {
  return(
    <SearchFormStyled {...props}>{props.children}</SearchFormStyled>
  )
}