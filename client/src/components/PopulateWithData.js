import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  width: 100%; margin: 25px auto;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px) );
  grid-auto-rows: minmax(100px, 1fr);
  grid-gap: 5px;
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

const PopulateWithData = ({shopData}) => {


 if(shopData.length > 0){
    return ( 
      <ItemsWrapper>
      
      
        {shopData.map(item => <div key={item.id}><Link to={{ pathname: `/shop/item/${item.id}`}}>{item.name}</Link></div>)}
      
   
      </ItemsWrapper>)
  } else{
    return (  <div>Nothing was found</div> )
  }
}

export default PopulateWithData
