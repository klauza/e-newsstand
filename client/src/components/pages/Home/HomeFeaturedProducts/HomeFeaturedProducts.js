import React, { Fragment, useState, useRef } from 'react';
import { ChildWrapper } from '../../../layout/ReusableComponents/StyledComponents';
import { useRect } from '../UseRect';

// import temp data
import cards from './data';

// CSS
import { FeaturedItemsMobileBtn, FeaturedWrapper, Header, FeaturedBody, FeaturedArrow, FeaturedProducts, Card, CardItemDesc, CardItemName, CardItemValue } from './HomeFeaturedCSS';




const HomeFeaturedProducts = ({refs, handleClick, anchor}) => {

  const theBody = useRef();
  const featuredContainerDiv = useRef();
  const [imgQty] = useState(6);
  const [arrowPos, setArrowPos] = useState(0);

  const featureWidth = useRect(featuredContainerDiv).width/3;


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