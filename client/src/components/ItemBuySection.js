import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid yellow;
  display: grid; grid-template-columns: 1fr 1fr;
`;
const InStock = styled.span`
  color: green;
`;
const OutOfStock = styled.span`
  color: red;
`;
const Select = styled.select`
  width: 50px; height: 50px;
  option{

  }
`;

const ItemBuySection = ({inStock, price, throwToBasket, handleQuantity}) => {

 
  const qtyOptions = [];

  for(let i=1; i<=25; i++){
    qtyOptions.push( <option key={i} value={i}>{i}</option> )
  }



  return (
    <Container>

      <div>
        <p>PRICE: {price}</p>
        <p>Availability: {inStock > 0 ? (<InStock>In stock</InStock>) : (<OutOfStock>Out of stock</OutOfStock>)}</p>
      </div>

      <div>
        <div>
          <span>Quantity</span>
          <Select name="" id="" onChange={(e) => handleQuantity(e.target.value)} disabled={inStock === 0}>
            {qtyOptions}
          </Select>
        </div>

        <button onClick={throwToBasket}>ADD TO BASKET</button>
      </div>

    </Container>
  )
}

export default ItemBuySection
