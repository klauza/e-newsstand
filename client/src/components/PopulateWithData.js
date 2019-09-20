import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/basketActions';
import styled from 'styled-components';

const PageWrap = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 4fr;
  @media(max-width:768px){
  grid-template-columns: 1fr;
  }
`;
const DetailedSearch = styled.div`
  margin: 20px 10px 20px 0;
  border: 1px solid red;
  min-height: 150px;
  @media(max-width: 768px){
    margin: 20px 0 20px 0;
  }
`;

const RightGrid = styled.div`

`;
const DisplayView = styled.div`
  margin-top: 20px;
`;

const ItemsWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  justify-content: center;
  a{
    text-decoration: none;
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 5px;
    grid-row-gap: 20px;
  }
`;

const Item = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  border: 1px solid grey;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6);
  transition: box-shadow 175ms ease, border 175ms ease;
  &:hover{
    transition: all 175ms ease;
    border: 1px solid black;
    box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.7);
  }
`;
const ItemName = styled.h4`
  margin: 10px 0;
  text-align: center;
  color: black;
  font-weight: 700;
`;
const ItemImage = styled.div`
  width: 100%; height: 100%;
  padding: 0 5px;
  img{
    width: 100%; height: 100%;
    object-fit: cover;
  }
`;
const ItemPrice = styled.div`
  text-align: center;
  color: red;
`;
const ItemShortDesc = styled.div`
  padding: 5px;
  text-align: center;
  color: grey;
`;

const PopulateWithData = ({shopData, addToBasket}) => {

  

  const throwToBasket = (item) => {
    addToBasket(item);
  }



{/* <button onClick={()=>throwToBasket(item)}>add to basket</button> */}

 if(shopData.length > 0){
    return ( 
      <PageWrap>
        <DetailedSearch><div>detailed search (filter) </div> <br/><hr/><br/> <div>popular items populated vertically- to fill up whitespace</div></DetailedSearch>
        
        <RightGrid>
          <DisplayView>
            View: 
            <button>A</button>
            <button>B</button>
          </DisplayView>

          <ItemsWrapper display={view}>
            {shopData.map(item => 
              <Link key={item.id} to={{ pathname: `/shop/item/${item.id}`}}>
                <Item>
                  <ItemName>{item.name}</ItemName>
                  <ItemImage><img src={item.imgs[0]} alt=""/></ItemImage>
                  <ItemPrice>£ {item.price}</ItemPrice>
                  <ItemShortDesc>{item.shortDesc}</ItemShortDesc>
                </Item>
              </Link>
            )}
          </ItemsWrapper>

        </RightGrid>
      </PageWrap>
    )
  } else{
    return (  <div>Nothing was found</div> )
  }
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket})(PopulateWithData)
