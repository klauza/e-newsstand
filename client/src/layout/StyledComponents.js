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
  border: 0;
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