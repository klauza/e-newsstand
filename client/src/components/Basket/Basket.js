import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBasket, deleteItem } from '../../actions/basketActions';
import { setAlert } from '../../actions/alertActions';

import { Wrapper } from '../../layout/StyledComponents';
import {Container, ItemsWrapper, Item, ItemImage, ItemDesc, DeleteItem, PayButton, ColorBox} from './BasketCSS';



const Basket = ({setAlert, updateBasket, deleteItem, basket: {items}}) => {


  // ITEM UPDATE
  const updtItem = (item) => updateBasket(item);

  // ITEM DELETE
  const delItem = (id) => deleteItem(id);

  // DISPLAY ITEM'S SUM PRICE
  const calculatePrice = (price, qty) =>  Math.round(qty * price * 100)/100

  // DISPLAY ALL ITEMS PRICE
  const calculateTotalPrice = () => {
    let count = 0;
    
    items.forEach(item => count = count + item.price * item.quantity);
    
    return  Math.round(count * 100)/100
  }

  // PAYMENT FUNC
  const paymentStart = () => setAlert("Payment feature coming soon", "info", 2000);


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
                      <div>{item.name}{item.color !== false && <ColorBox color={item.color}></ColorBox>}</div>
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
          
          <span>total to pay: £ {calculateTotalPrice()}</span>
          <PayButton onClick={paymentStart}>Pay</PayButton>
      </Container>
    </Wrapper>
  )
}

Basket.propTypes = {
  setAlert: PropTypes.func,
  updateBasket: PropTypes.func,
  deleteItem: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => ({
  basket: state.basket
})
export default connect(mapStateToProps, {setAlert, updateBasket, deleteItem})(Basket)
