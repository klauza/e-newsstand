import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';
import { useRect } from './UseRect';

const FeaturedWrapper = styled.div`
  display: flex; flex-direction: column;
  margin: 100px 0 0px;
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
  grid-template-columns: 50px 1fr 50px; /* button body button */
  grid-auto-rows: 200px;
  overflow: hidden;
  justify-content: center;
  @media(max-width: 768px){
    grid-template-columns: 1fr; /* no buttons, just body. Scrolling with finger */
    overflow-x: scroll;
      transition: transform 175ms ease;
    &.moveActive{
      transition: transform 175ms ease;
      transform: scale(0.95);
    }
  }
`;
const FeaturedArrow = styled.div`
  z-index: 2;
  border: 1px solid yellow;
  button{
    display: grid; align-items: center;
    width: 100%; height: 100%;
    i{
      font-size: 1.5em;
    }
    &:hover{
      cursor: pointer;
    }
    &[disabled]{
      cursor: default;
      background: grey;
      i{
        display: none;
      }
    }
  }

  @media(max-width: 768px){
    display: none;
  }
`;

// Content
const FeaturedProducts = styled.div`
  display: grid; 
  /* grid-template-columns: repeat(5, minmax(135px, 200px));  */
  justify-content: center;
  transition: transform 200ms ease;
  position: relative;
  /* transform: translateX(-800px); */

  @media(max-width: 768px){
    /* display: grid; */
    /* grid-template-columns: repeat(${props => props.imgQty}, minmax(135px, 200px)); */
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
`;
const Card = styled.div`
  width: calc( ${props => props.featureWidth+'px'} - 20px ); 
  margin-left: 10px;
  /* max-width: 250px; */
  
  height: 100%;
  position: absolute; top: 0; left: 0;

  display: grid; grid-template-columns: 1fr; 

  grid-template-rows: 1fr 1fr;
  align-items: center;
  border: 1px solid black;
  

  @media(max-width: 998px){
 
  }
  @media(max-width: 768px){
    border: 0;
    padding: 0 2.5px;
  }
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const CardItemDesc = styled.div`
  height: 100%;
  display: grid; grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid black;
`;
const CardItemName = styled.div`
  border: 1px solid yellow;
`;
const CardItemValue = styled.div`

  border: 1px solid red;
  div{
    border: 1px solid orange;
  }
`;


const HomeFeaturedProducts = () => {

  // const [fetched, setFetched] = useState(false);
  const theBody = useRef();
  const featuredContainerDiv = useRef();
  const [imgQty] = useState(6);
  const [arrowPos, setArrowPos] = useState(0);


  const featureWidth = useRect(featuredContainerDiv).width/3;

  

  const content = [
    {

    }
  ]

  // need photos to display (6? => 2 x 3)
  // fetch only 6, no more

  const movingBody = () => {
    theBody.current.classList.add('moveActive');
  }
  const notMovingBody = () => {
    theBody.current.classList.remove('moveActive');
  }

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


  // console.log(useRect(featuredContainerDiv).width);
  // console.log(featureWidth);


  return (
    <ChildWrapper>
      <FeaturedWrapper>
        <FeaturedTitle><h3>Featured products</h3></FeaturedTitle>

        <FeaturedBody ref={theBody} onTouchStart={movingBody} onTouchEnd={notMovingBody}>
          <FeaturedArrow onClick={()=>moveCarousel("left")}><button disabled={arrowPos===0}><i className="fa fa-caret-left"></i></button></FeaturedArrow>

          <FeaturedProducts ref={featuredContainerDiv} imgQty={imgQty}>
            

            <Card featureWidth={featureWidth} style={{transform: "translateX(0px)"}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>1 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
  
           

            <Card featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*1+'px'})`}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>2 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>

            <Card featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*2+'px'})`}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>3 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>

            <Card featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*3+'px'})`}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>4 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>

            <Card featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*4+'px'})`}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>5 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>

            <Card featureWidth={featureWidth} style={{transform: `translateX(${featureWidth*5+'px'})`}}>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>6 Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>

          </FeaturedProducts>

          <FeaturedArrow onClick={()=>moveCarousel("right")}><button disabled={arrowPos===1}><i className="fa fa-caret-right"></i></button></FeaturedArrow>
        </FeaturedBody>


      </FeaturedWrapper>
    </ChildWrapper>
  )
}

export default HomeFeaturedProducts
