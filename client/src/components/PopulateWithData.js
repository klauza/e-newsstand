import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/basketActions';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  width: 100%; margin: 25px auto;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px) );
  grid-auto-rows: minmax(150px, 1fr);
  /* grid-gap: 20px; */
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  justify-content: center;
  div{
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
  }
`;

const PopulateWithData = ({shopData, addToBasket}) => {


  const throwToBasket = (item) => {
    addToBasket(item);
  }


 if(shopData.length > 0){
    return ( 
      <ItemsWrapper>
      
        {shopData.map(item => <div key={item.id}><Link to={{ pathname: `/shop/item/${item.id}`}}>{item.name}</Link><button onClick={()=>throwToBasket(item)}>add to basket</button></div>)}
      
      </ItemsWrapper>)
  } else{
    return (  <div>Nothing was found</div> )
  }
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket})(PopulateWithData)
