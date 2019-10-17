import React from 'react';
import styled from 'styled-components';


const Product = styled.div`
  display: grid; grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 1fr;
  /* grid-template-rows: repeat(9, 40px); */

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > div{
    position: relative;
  }
`;

const BlackBox1 = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / span 2;
  background: #000;
`;
const BlackBox2 = styled.div`
  grid-column: 5 / 7;
  grid-row: 9 / span 2;
  background: #000;
`;

const ProductImgOne = styled.div`
  grid-column: 4 / 9;
  grid-row: 2 / span 5;
  width: 100%; height: 100%;
  border: 2px solid red;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const ProductImgTwo = styled.div`
  grid-column: 1 / 6;
  grid-row: 5 / span 5;
  width: 100%; height: 100%;
  border: 2px solid purple;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const ProductDesc = styled.div`
  grid-column: 7 / span 4;
  grid-row: 8 / span 3;
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const LatestProductActive = ({activeProduct}) => {
  return (
    <Product>
      <BlackBox1></BlackBox1>
      <ProductImgOne><img src={activeProduct.img1} alt=""/></ProductImgOne>
      <ProductImgTwo><img src={activeProduct.img2} alt=""/></ProductImgTwo>
      <ProductDesc>
        <p>{activeProduct.name}</p>
        <a href={activeProduct.link}>Check this out</a>
        <p>{activeProduct.desc}</p>
      </ProductDesc>
      <BlackBox2></BlackBox2>
    </Product>
  )
}

export default LatestProductActive
