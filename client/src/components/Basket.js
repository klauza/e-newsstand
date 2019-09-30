import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../layout/StyledComponents';

const Container = styled.div`
  display: flex; flex-direction: column;
  text-align: center;
  i{
    font-size: 6em;
  }
`;
const Basket = () => {
  return (
    <Wrapper>
      <Container>
        <i className="fa fa-shopping-cart"></i>
        <span>Your basket </span>
      </Container>
    </Wrapper>
  )
}

export default Basket
