import React, {useState} from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'

const ProductProps = posed.div({
  enter: { opacity: 1, y: 0, delay: 250 },
  exit: { opacity: 0, y: -25, transition: { duration: 600 } }
})
const Product = styled(ProductProps)`
  display: grid; grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 1fr;
  position: absolute;
  top: 200px; 
  margin-bottom: 150px;
  width: 100%; 
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







const ImgTwoProps = posed.div({
  zoomedIn: {
    position: 'fixed',
    top: 60,
    left: 20,
    bottom: 60,
    right: 20,
    flip: true,
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
  },
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true,
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
  }
  
})
const ProductImg = styled(ImgTwoProps)`
  grid-column: 3 / 9;
  grid-row: 2 / span 6;
  width: 100%; height: 100%;
  border: 2px solid purple;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;

const ProductOneProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 220 },
  exit: { x: 150, opacity: 0 }
})
const ProductDescName = styled(ProductOneProps)`
  grid-row: 8;
  grid-column: 4 / span 4;
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;

const ProductLinkProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 220 },
  exit: { x: -150, opacity: 0 }
})
const ProductDescLink = styled(ProductLinkProps)`
  grid-row: 9;
  grid-column: 4 / span 4;
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;

const ProductDescProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 220 },
  exit: { x: 150, opacity: 0 }
})
const ProductDescDesc = styled(ProductDescProps)`
  grid-row: 10;
  grid-column: 4 / span 4;
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;
const BottomPanel = styled.div`
  grid-row: 11 / span 2;
  grid-column: 3 / span 6;
  border: 1px solid blue; border-radius: 30%;
  background: blue;
`;
const LatestProductActive = ({activeProduct}) => {

  const [isZoomed, setIsZoomed] = useState(false);




  return (

    <PoseGroup flipMove={false}>
      <Product key={activeProduct.id}>


        <ProductImg pose={isZoomed ? "zoomedIn" : "zoomedOut"} onClick={()=>setIsZoomed(prevState => !prevState)}><img src={activeProduct.img} alt=""/></ProductImg>
        
        <ProductDescName>
          <p>{activeProduct.name}</p>
        </ProductDescName>

        <ProductDescLink>
          <a href={activeProduct.link}>Check this out</a>
        </ProductDescLink>

        <ProductDescDesc>
          <p>{activeProduct.desc}</p>
        </ProductDescDesc>
        <BottomPanel></BottomPanel>
        
      </Product>
    </PoseGroup>

  )
}

export default LatestProductActive
