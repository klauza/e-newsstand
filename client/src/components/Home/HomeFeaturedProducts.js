import React, { Fragment, useState, useRef } from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';
import { useRect } from './UseRect';

const FeaturedItemsMobileBtn = styled.button`
  display: none;
  @media(max-width: 768px){
    z-index: 6;
    display: block;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    width: 50%; height: 50px;
    position: fixed; bottom: 0;
    padding-right: 35px;

    font-family: 'Oswald', sans-serif;
    text-align: right;
    color: black;
    border: 1px solid black;
    background: white;
    outline: none;
    &:active{ background: lightgrey; }
  }
`;

const FeaturedWrapper = styled.div`
  display: flex; flex-direction: column;
  
`;
const Header = styled.h2`
padding-top: 55px;
margin: 0px 0 50px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
`;

const FeaturedBody = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 50px 1fr 50px; /* button body button = screen view only*/
  grid-auto-rows: 250px;
  justify-content: center;
  padding-bottom: 5px;

  @media(max-width: 768px){
    overflow-x: scroll;
    grid-template-columns: 1fr; /* no buttons, just body = mobile view */
    &.moveActive{
      transform: scale(0.95);
      transition: transform 175ms ease;
    }
  }
`;
const FeaturedArrow = styled.div`
  overflow: hidden;
  z-index: 2;
  opacity: ${props => props.visible ? ("0") : ("1")};
  border: 1px solid black; border-radius: 2px;
  box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  transition: opacity 125ms ease;

  @media(max-width: 768px){ 
    display: none; 
  }
  
  button{
    display: grid; align-items: center;
    width: 100%; height: 100%;
    border: 0;
    background: white;
    transition: all 250ms ease;
    i{
      transform: translateX(0px);
      font-size: 3.25em;
      transition: transform 250ms ease;
    }
    &:hover{ cursor: pointer; }

    &[disabled]{
      cursor: default;
      i{
        transform: translateY(50px);
        transition: all 250ms ease;
      }
    }
  }
`;

// Content
const FeaturedProducts = styled.div`
  display: grid; 
  justify-content: center;
  transition: transform 200ms ease;
  position: relative;
  /* using transformX on this component */

  @media(max-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
`;
const Card = styled.div`
  width: calc( ${props => props.featureWidth+'px'} - 20px ); 
  position: absolute; top: 0; left: 0;
  margin-left: 10px;
  height: 100%;
  
  display: grid; grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr;
  align-items: center;

  @media(max-width: 768px){
    border: 0;
    padding: 0 2.5px;
  }
  img{
    width: 100%; height: 100%; object-fit: cover;
    padding: 5px;
    box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  }
`;
const CardItemDesc = styled.div`
  display: grid; grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  height: 100%;
`;
const CardItemName = styled.div`
  text-align: center;
`;
const CardItemValue = styled.div`
  text-align: center;
`;


const HomeFeaturedProducts = ({refs, handleClick, anchor}) => {

  // const [fetched, setFetched] = useState(false);
  const theBody = useRef();
  const featuredContainerDiv = useRef();
  const [imgQty] = useState(6);
  const [arrowPos, setArrowPos] = useState(0);


  const featureWidth = useRect(featuredContainerDiv).width/3;

  

  const cards = [
    {
      img: "https://www.yorkshireenvelopes.com/wp-content/uploads/2016/06/brownr_2_1_1.jpg",
      name: "name_1",
      price: 21,
      inStock: 4 
    },
    {
      img: "https://www.yorkshireenvelopes.com/wp-content/uploads/2016/06/brownr_2_1_1.jpg",
      name: "name_2",
      price: 33,
      inStock: 1 
    },
    {
      img: "https://www.yorkshireenvelopes.com/wp-content/uploads/2016/06/brownr_2_1_1.jpg",
      name: "name_3",
      price: 10,
      inStock: 33 
    },
    {
      img: "https://cdn11.bigcommerce.com/s-xa92dr7qw8/images/stencil/1280x1280/products/608/4375/C6-kraft-envelope__63921.1561109293.jpg?c=2&imbypass=on",
      name: "name_4",
      price: 5,
      inStock: 2 
    },
    {
      img: "https://cdn11.bigcommerce.com/s-xa92dr7qw8/images/stencil/1280x1280/products/608/4375/C6-kraft-envelope__63921.1561109293.jpg?c=2&imbypass=on",
      name: "name_5",
      price: 51,
      inStock: 4 
    },
    {
      img: "https://cdn11.bigcommerce.com/s-xa92dr7qw8/images/stencil/1280x1280/products/608/4375/C6-kraft-envelope__63921.1561109293.jpg?c=2&imbypass=on",
      name: "name_6",
      price: 43,
      inStock: 15
    }
  ]

  // need photos to display (6? => 2 x 3)
  // fetch only 6, no more

  // mobile screen func
  const movingBody = () => {
    theBody.current.classList.add('moveActive');
  }
  const notMovingBody = () => {
    theBody.current.classList.remove('moveActive');
  }

  // big screen func
  const moveCarousel = (direction) => {
    if(direction === "right"){
      setArrowPos(1);
      featuredContainerDiv.current.style.transform = `translateX(${-featureWidth*3+'px'})`;
    } 
    if(direction === "left"){
      setArrowPos(0);
      featuredContainerDiv.current.style.transform = 'translateX(0)';
    } 
  }


  return (
    <Fragment>
      <FeaturedItemsMobileBtn onClick={()=>handleClick(anchor.id)}>See featured items</FeaturedItemsMobileBtn>

      <ChildWrapper>
        <FeaturedWrapper >
          <Header ref={refs[anchor.id]}>FEATURED PRODUCTS</Header>

          <FeaturedBody ref={theBody} onTouchStart={movingBody} onTouchEnd={notMovingBody}>
            <FeaturedArrow onClick={()=>moveCarousel("left")} visible={arrowPos===0}><button disabled={arrowPos===0} ><i className="fa fa-caret-left"></i></button></FeaturedArrow>

            <FeaturedProducts ref={featuredContainerDiv} imgQty={imgQty}>
              
              {cards.map((card, id)=> 
              <Card key={id} featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*id + 'px'})`}}>
                <img src={card.img} alt=""/>
                <CardItemDesc>
                  <CardItemName>{card.name}</CardItemName>
                  <CardItemValue>£{card.price}</CardItemValue>
                  <CardItemValue>only {card.inStock} left</CardItemValue>
                </CardItemDesc>
              </Card>
              )}
              
            </FeaturedProducts>

            <FeaturedArrow onClick={()=>moveCarousel("right")} visible={arrowPos===1}><button disabled={arrowPos===1}><i className="fa fa-caret-right"></i></button></FeaturedArrow>
          </FeaturedBody>

        </FeaturedWrapper>
      </ChildWrapper>
    </Fragment>
  )
}
export default HomeFeaturedProducts