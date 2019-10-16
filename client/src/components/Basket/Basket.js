import React from 'react';
import { connect } from 'react-redux';
import { updateBasket, deleteItem } from '../../actions/basketActions';
import styled from 'styled-components';
import { Wrapper } from '../../layout/StyledComponents';
import { setAlert } from '../../actions/alertActions';

const Container = styled.div`
  width: 70%;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 100%; }
  margin: 0 auto;
  display: flex; flex-direction: column;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  i{
    font-size: 6em;
  }
`;
const ItemsWrapper = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-row-gap: 35px;
  margin: 22px 0;
`;

// ITEM
const Item = styled.div`
  position: relative;
  border-top: 1px solid black; 
  border-bottom: 1px solid black; 
  display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 198px;
`;
const ItemImage = styled.div`
  width: auto; height: 100%;
  padding: 5px;
  @media(max-width: 768px){ padding: 5px; }
  img{ width: 100%; height: 100%; object-fit: cover; }
`;

const ItemDesc = styled.div`
  border-left: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  padding: 5px;

  button{
    margin-left: 3px;
    background: white; color: black;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0px 3px -1px black;
    width: 25px; height: 25px;
    i{
      line-height: 25px;
      font-size: 1em;
    }
    &:hover{
      cursor: pointer;
      box-shadow: 0 0px 4px 0px black;
    }
    &:disabled{
      color: grey;
    }
  }
`;

const DeleteItem = styled.button`
  position: absolute;
  top: 2%; right: 5px; 
  background: red;
  width: 30px;
  height: 30px;
  box-shadow: 0 0px 3px -1px black;
  color: white;
  border: 1px solid white;
  @media(max-width: 768px){
    width: 50px;
    top: unset; bottom: -15px;
    right: 50%; transform: translateX(50%);
    box-shadow: 0 0px 3px 0px black;
  }
  &:hover{
    cursor: pointer;
    box-shadow: 0 0px 4px 0px black;
  }

`;
// PAYMENT
const PayButton = styled.button`
  width: 100px; height: 40px; margin: 25px auto 0;
  border: 1px solid black; border-radius: 3px;
  background: rgba(45,98,110,0.9);
  color: white;
  box-shadow: 0 3px 3px -3px #000;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;

  &:hover{
    box-shadow: 0 3px 2px -2px #000;
    cursor: pointer;
  }
`;


const Basket = ({setAlert, updateBasket, deleteItem, basket: {items}}) => {



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

  const paymentStart = () => {
    setAlert("Payment feature coming soon", "info", 2000);
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
                        <button disabled={item.inStock <= item.quantity} onClick={()=>{ updtItem({...item, quantity: item.quantity+1})  }}><i className="fa fa-plus"></i></button>
                        <button disabled={item.quantity === 1} onClick={()=>{ updtItem({...item, quantity: item.quantity-1})  }}><i className="fa fa-minus"></i></button> 
                      </div>
                      <div>£ {calculatePrice(item.price, item.quantity)} <span style={{display: "block", fontSize: "0.65em"}}>{item.quantity > 1 ? (`(£ ${item.price} for each)`) : (null)}</span></div>
                    </ItemDesc>
                 
                    <DeleteItem onClick={()=>delItem(item.id)}> X </DeleteItem>
                  </Item>
                )
              })

            ) : (<div>no items in basket</div>)}
          </ItemsWrapper>
          {/* {total !== 0 ?  <div>Total to pay: {total}</div> : null } */}
          total to pay: £ {calculateTotalPrice()}
          <PayButton onClick={paymentStart}>Pay</PayButton>
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  basket: state.basket
})
export default connect(mapStateToProps, {setAlert, updateBasket, deleteItem})(Basket)
