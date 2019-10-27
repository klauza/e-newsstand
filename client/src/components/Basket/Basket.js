import React from 'react';
import { connect } from 'react-redux';
import { updateBasket, deleteItem } from '../../actions/basketActions';
import { setAlert } from '../../actions/alertActions';

import { Wrapper } from '../../layout/StyledComponents';
import {Container, ItemsWrapper, Item, ItemImage, ItemDesc, DeleteItem, PayButton} from './BasketCSS';



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
