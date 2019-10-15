import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';
import { useRect } from './UseRect';

const FeaturedWrapper = styled.div`
  display: flex; flex-direction: column;
  margin: 100px 0 0px;
`;

const FeaturedTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  width: 100%;
  text-align: center;
  color: black;
  margin: 25px 0;
`;
const FeaturedBody = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px; /* button body button */
  grid-auto-rows: 250px;
  overflow: hidden;
  padding-bottom: 5px;
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
  border: 1px solid black;
  box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  button{
    border: 0;
    display: grid; align-items: center;
    width: 100%; height: 100%;
    background: white;
    transition: background-color 250ms ease;
    i{
      font-size: 2.25em;
    }
    &:hover{
      cursor: pointer;
    }
    &[disabled]{
      transition: background-color 250ms ease;
      cursor: default;
      background: grey;
      i{
        transition: opacity 250ms ease;
        opacity: none;
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
  /* border: 1px solid black; */
  

  @media(max-width: 998px){
 
  }
  @media(max-width: 768px){
    border: 0;
    padding: 0 2.5px;
  }
  img{
    padding: 5px;
    width: 100%; height: 100%; object-fit: cover;
    box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.75);
  }
`;
const CardItemDesc = styled.div`
  height: 100%;
  display: grid; grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  /* border: 1px solid black; */
`;
const CardItemName = styled.div`
  text-align: center;
  /* border: 1px solid yellow; */
`;
const CardItemValue = styled.div`
  text-align: center;
  /* border: 1px solid red; */

`;


const HomeFeaturedProducts = () => {

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
    },
    {
      img: "https://cdn11.bigcommerce.com/s-xa92dr7qw8/images/stencil/1280x1280/products/608/4375/C6-kraft-envelope__63921.1561109293.jpg?c=2&imbypass=on",
      name: "name_7",
      price: 55,
      inStock: 55
    }
  ]

  // need photos to display (6? => 2 x 3)
  // fetch only 6, no more

  // moving in mobile screen
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
        <FeaturedTitle>Featured products</FeaturedTitle>

        <FeaturedBody ref={theBody} onTouchStart={movingBody} onTouchEnd={notMovingBody}>
          <FeaturedArrow onClick={()=>moveCarousel("left")}><button disabled={arrowPos===0}><i className="fa fa-caret-left"></i></button></FeaturedArrow>

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

          <FeaturedArrow onClick={()=>moveCarousel("right")}><button disabled={arrowPos===1}><i className="fa fa-caret-right"></i></button></FeaturedArrow>
        </FeaturedBody>


      </FeaturedWrapper>
    </ChildWrapper>
  )
}

export default HomeFeaturedProducts
