import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';
import LatestProductActive from './LatestProductActive';

const LatestProductsMobileBtn = styled.button`
  display: none;
  @media(max-width: 768px){
    display: block;
    height: 50px;
    width: 50%;
    font-family: 'Oswald', sans-serif;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    position: fixed;
    bottom: 0;
    left: 50%;
    text-align: left;
    padding-left: 35px;
    z-index: 6;
    border: 1px solid black;
    background: white;
    outline: none;
    &:active{
      background: lightgrey;
    } 
  }
`;

const Header = styled.h2`
  text-align: center;
  font-family: 'Oswald', sans-serif;
  margin: 0px 0 25px;
  padding-top: 55px;
`;

const Container = styled.div`
  display: flex; flex-direction: column;
  width: 50%; margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 900px;

  @media(max-width:1200px){
    width: 70%;
    height: 800px;
  }
  @media(max-width: 768px){
    width: 100%; margin: 0 auto;
    height: 600px
  }
`;

const ProductNumber = styled.div`
  display: flex; flex-direction: row;
  width: 300px;
  height: 40px;
  margin: 25px auto 25px;
  color: white;
  button{
    width: 100%; height: 100%;
    margin: 0 5px;
  }
`;

// useEffect is fetching last 3 added products
// useState holds these products

// if products, then
const LatestProducts = ({refs, handleClick, anchor}) => {

  const [activeProduct, setActiveProduct] = useState(0); 

  const products = [
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
      name: "Guitar",
      desc: "Product desc",
      link: "!#"
    },
    {
      id: 2,
      img: "https://ae01.alicdn.com/kf/H2fb670b6b0334142beb7c553c85d1ac07/8sheets-Retro-English-Book-Page-Background-Material-Vintage-English-Newspapers-Deco-Sticker-DIY-Scrapbooking-planner-Diary.jpg",
      name: "Flute",
      desc: "Product desc2",
      link: "!#"
    },
    {
      id: 3,
      img: "https://www.historic-newspapers.co.uk/images/newspapers/lrg-newspaper.jpg",
      name: "Piano",
      desc: "Product desc3",
      link: "!#"
    }
  ]

  const changeProduct = (e) => {
    setActiveProduct(e);
  }
  return (
    <Fragment>
      <LatestProductsMobileBtn onClick={()=>handleClick(anchor.id)}>Our newest products</LatestProductsMobileBtn> {/* isSticky bottom */}

      <ChildWrapper>
        <Container>
          <Header ref={refs[anchor.id]}>NEWEST PRODUCTS</Header>
            <ProductNumber>
                <button onClick={()=>changeProduct(0)}>1</button>
                <button onClick={()=>changeProduct(1)}>2</button>
                <button onClick={()=>changeProduct(2)}>3</button>
            </ProductNumber>

            {/* active product */}
              <LatestProductActive activeProduct={products[activeProduct]}/>

        </Container>
      </ChildWrapper>
    </Fragment>
  )
}

export default LatestProducts
