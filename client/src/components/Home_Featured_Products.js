import React from 'react';
import styled from 'styled-components';

const FeaturedWrapper = styled.div`
  display: flex; flex-direction: column;
  margin: 100px 0;
`;

const FeaturedTitle = styled.div`
  width: 100%;
  text-align: center;
  h3{
    color: red;
  }
`;

const FeaturedBody = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-auto-rows: 200px;
`;
const FeaturedArrow = styled.div`
  border: 1px solid yellow;
  button{display: grid; align-items: center;
    width: 100%; height: 100%;
  }
`;
const FeaturedProducts = styled.div`
  display: flex; flex-direction: row;
  div{
    display: grid; align-items: center;
    border: 1px solid black;
    width: 100%; height: 100%;
  }
`;

const Home_Featured_Products = () => {
  return (
    <FeaturedWrapper>
      <FeaturedTitle><h3>Featured products</h3></FeaturedTitle>

      <FeaturedBody>
        <FeaturedArrow><button>left</button></FeaturedArrow>

        <FeaturedProducts>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </FeaturedProducts>

        <FeaturedArrow><button>right</button></FeaturedArrow>
      </FeaturedBody>


    </FeaturedWrapper>
  )
}

export default Home_Featured_Products
