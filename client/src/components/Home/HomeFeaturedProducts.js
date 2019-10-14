import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';

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
  grid-template-columns: 50px 1fr 50px; /* button body button */
  grid-auto-rows: 200px;
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
  border: 1px solid yellow;
  button{
    display: grid; align-items: center;
    width: 100%; height: 100%;
  }
  @media(max-width: 768px){
    display: none;
  }
`;

// Content
const FeaturedProducts = styled.div`
  display: grid; grid-template-columns: repeat(5, minmax(135px, 200px));
  justify-content: center;
  @media(max-width: 768px){
    grid-template-columns: repeat(5, minmax(135px, 200px));
    justify-content: left;
  }
`;
const Card = styled.div`
  display: grid; grid-template-columns: 1fr;
  margin: 0 10px;
  @media(max-width: 998px){
    margin: 0 2.5px;
  }
  grid-template-rows: 1fr 1fr;
  align-items: center;
  border: 1px solid black;
  width: 100%p; height: 100%;

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

  // need photos to display (6? => 2 x 3)
  // fetch only 6, no more

  const movingBody = () => {
    theBody.current.classList.add('moveActive');
  }
  const notMovingBody = () => {
    theBody.current.classList.remove('moveActive');
  }

  return (
    <ChildWrapper>
      <FeaturedWrapper>
        <FeaturedTitle><h3>Featured products</h3></FeaturedTitle>

        <FeaturedBody ref={theBody} onTouchStart={movingBody} onTouchEnd={notMovingBody}>
          <FeaturedArrow><button>left</button></FeaturedArrow>

          <FeaturedProducts>
            <Card>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
            <Card>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
            <Card>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
            <Card>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
            <Card>
              <img src="https://i.ebayimg.com/images/g/XesAAOSwLtZdo4mP/s-l1600.jpg" alt=""/>
              <CardItemDesc>
                <CardItemName>Nazwa</CardItemName>
                <CardItemValue>Price 20$</CardItemValue>
                <CardItemValue>inStock</CardItemValue>
              </CardItemDesc>
            </Card>
          </FeaturedProducts>

          <FeaturedArrow><button>right</button></FeaturedArrow>
        </FeaturedBody>


      </FeaturedWrapper>
    </ChildWrapper>
  )
}

export default HomeFeaturedProducts
