import React from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';

const Header = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  display: flex; flex-direction: row;
 
  height: auto;
  div{
    display: grid;
    justify-content: center;
    align-content: center;
    width: 100%; height: 200px;
    border: 1px solid black;
  }
`;
const Product = styled.div`

`;

// useEffect is fetching last 3 added products
// useState holds these products

// if products, then
const LatestProducts = () => {
  return (
    <ChildWrapper>
      <Header>Our newfest products</Header>
      <Container>
        {/* loop through 3 products */}
        <Product>
          <div>IMAGE</div>
          <p>Product desc</p>
          <a href="#">product link</a>
        </Product>

        <div>2</div>
        <div>3</div>
      </Container>
    </ChildWrapper>
  )
}

export default LatestProducts
