import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateBasket, deleteItem } from '../../actions/basketActions';
import styled from 'styled-components';
import { Wrapper } from '../../layout/StyledComponents';

const Container = styled.div`
  width: 70%;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 100%; }
  margin: 0 auto;
  display: flex; flex-direction: column;
  text-align: center;
  i{
    font-size: 6em;
  }
`;
const ItemsWrapper = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-row-gap: 5px;
  border: 1px solid red;
  margin-top: 15px;
`;

// ITEM
const Item = styled.div`
  position: relative;
  border: 1px solid black;
  display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 200px;
`;
const ItemImage = styled.div`
  width: auto; height: 100%;
  padding: 15px;
  @media(max-width: 768px){ padding: 5px; }
  img{ width: 100%; height: 100%; object-fit: cover; }
`;

const ItemDesc = styled.div`
  border-left: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;
const ButtonUp = styled.button`
  width: 25px; height: 25px;
  background: red;
`;
const ButtonDown = styled.button`
  width: 25px; height: 25px;  
  background: orange;
`;
const DeleteItem = styled.button`
  position: absolute;
  top: 50%; right: 0; 
  transform: translateY(-50%);
`;
// PAYMENT
const PayButton = styled.button`
  width: 100px; height: 40px; margin: 25px auto 0;
  border: 1px solid black; border-radius: 3px;
  background: yellow;
  color: black;
  box-shadow: 0 3px 2px -2px #000;
  &:hover{
    cursor: pointer;
  }
`;


const Basket = ({updateBasket, deleteItem, basket: {items}}) => {



  const updtItem = (item) => {
    updateBasket(item);
  }
  const delItem = (id) => {
    deleteItem(id);
  }

  const calculatePrice = (price, qty) => {
    
    return  Math.round(qty * price * 100)/100
  }

  const calculateTotalPrice = () => {
    let count = 0;
    
    items.forEach(item => {
      count = count + item.price * item.quantity
    });
    return  Math.round(count * 100)/100
  }

  


  return (
    <Wrapper> 
      <Container>
        <i className="fa fa-shopping-cart"></i>
        <span>Your basket </span>
          <ItemsWrapper>
            {items.length > 0 ? (
              items.map((item, id)=>{
                return (
                  <Item key={id}>

                    <ItemImage><img src={item.img} alt=""/></ItemImage>

                    <ItemDesc>
                      <div>{item.name}</div>
                      <div>quantity {item.quantity} 
                        <ButtonUp disabled={item.inStock <= item.quantity} onClick={()=>{ updtItem({...item, quantity: item.quantity+1})  }}>+</ButtonUp>
                        <ButtonDown disabled={item.quantity === 1} onClick={()=>{ updtItem({...item, quantity: item.quantity-1})  }}>-</ButtonDown> 
                      </div>
                      <div>£ {calculatePrice(item.price, item.quantity)}</div>
                    </ItemDesc>
                 
                    <DeleteItem onClick={()=>delItem(item.id)}> X </DeleteItem>
                  </Item>
                )
              })

            ) : (<div>no items in basket</div>)}
          </ItemsWrapper>
          {/* {total !== 0 ?  <div>Total to pay: {total}</div> : null } */}
          total to pay: £ {calculateTotalPrice()}
          <PayButton>Pay</PayButton>
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  basket: state.basket
})
export default connect(mapStateToProps, {updateBasket, deleteItem})(Basket)
