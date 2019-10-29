import React, {useState} from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'

const ProductProps = posed.div({
  enter: { opacity: 1, delay: 250 },
  exit: { opacity: 0, transition: { duration: 600 } }
})
const Product = styled(ProductProps)`
  display: grid; grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  position: absolute; top: 0;
  width: 100%; height: 100%; 
  margin-bottom: 150px;
  @media(max-width:768px){
    grid-auto-rows: 175px;
  }
`;

const ProductImgProps = posed.div({
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
const ProductImg = styled(ProductImgProps)`
  grid-column: 1 / 3;
  width: 100%; height: 100%;
  /* border: 1px solid black; */
  z-index: 5;
  cursor: ${props => props.showBackdrop ? ("zoom-out") : ("zoom-in")} ;

  img{
    width: 100%; height: 100%; 
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  width: 100%; height: 100%;
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  &>div{
    display: grid; align-content: center;
    font-size: 1.25rem;
    font-family: sans-serif;
  }
`;
const ProductNameProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 300 },
  exit: { x: 150, opacity: 0, delay: 0, transition: { duration: 300 } }
})
const ProductName = styled(ProductNameProps)`
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;

const ProductLinkProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 450 },
  exit: { x: 150, opacity: 0, delay: 30, transition: { duration: 300 } }
})
const ProductLink = styled(ProductLinkProps)`
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;

const ProductDescProps = posed.div({
  enter: { x: 0, opacity: 1, delay: 600 },
  exit: { x: 150, opacity: 0, delay: 60, transition: { duration: 300 } }
})
const ProductDesc = styled(ProductDescProps)`
  width: 100%; height: 100%;
  border: 2px solid orangered;
  text-align: center;
`;

const BackgroundBlockOne = styled.div`
  background: ${props => props.color};
`;
const BackgroundBlockTwo = styled.div`
  background: ${props => props.color};
`;



const LatestProductActive = ({activeProduct, showBackdrop, setShowBackdrop}) => {

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <PoseGroup flipMove={false}>
      <Product key={activeProduct.id}>

        <ProductImg 
          showBackdrop={showBackdrop} 
          pose={isZoomed ? "zoomedIn" : "zoomedOut"} 
          onClick={()=>{setIsZoomed(prevState => !prevState); setShowBackdrop(prevState=>!prevState)}}
        >
          <img src={activeProduct.img} alt=""/>
        </ProductImg>

        <BackgroundBlockOne color={activeProduct.color} />
        <BackgroundBlockTwo color={activeProduct.color} />

        <ProductInfo>
          <ProductName>
            <p>{activeProduct.name}</p>
          </ProductName>
          <ProductLink>
            <a href={activeProduct.link}>Check this out</a>
          </ProductLink>
          <ProductDesc>
            <p>{activeProduct.desc}</p>
          </ProductDesc>
        </ProductInfo>


      </Product>
    </PoseGroup>
  )
}

export default LatestProductActive
