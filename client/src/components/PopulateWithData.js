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

const ItemsWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  grid-auto-rows: 300px;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  justify-content: center;

  @media(max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 250px;
    grid-column-gap: 5px;
    grid-row-gap: 20px;
  }
`;

const Item = styled.div`
  border: 1px solid black;
  width: 100%; height: 100%;
  display: block;
  a{
    width: 100%; height: 100%;
    display: block;
    &:hover{
      background: lightsalmon;
    }
  }
`;

const PopulateWithData = ({shopData, addToBasket}) => {


  const throwToBasket = (item) => {
    addToBasket(item);
  }


 if(shopData.length > 0){
    return ( 
      <PageWrap>
        <DetailedSearch><div>detailed search (filter) </div> <br/><hr/><br/> <div>popular items populated vertically- to fill up whitespace</div></DetailedSearch>
        <ItemsWrapper>

          {shopData.map(item => 

            <Link key={item.id} to={{ pathname: `/shop/item/${item.id}`}}>
            <Item>
              

                <div>title</div>
                <div><img src="" alt=""/></div>
                <div>price</div>
                <div>short desc</div>
                {item.name}
                {/* <button onClick={()=>throwToBasket(item)}>add to basket</button> */}

            </Item>
            </Link>
        
          )}

        </ItemsWrapper>
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
