import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid; grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;
  font-weight: 700;
  margin: 25px 0;
  @media(max-width:768px){
    grid-template-columns: 1fr 1fr;
  }
`;
const Price = styled.div`
  text-align: center;
`;
const InStock = styled.span`
  color: green;
`;
const OutOfStock = styled.span`
  color: red;
`;

const Quantity = styled.div`

`;
const Select = styled.select`
  width: 50px; height: auto;
  option{

  }
`;
const BuyButton = styled.button`
  font-family: 'Oswald', sans-serif;
  border: 1px solid grey; border-radius: 2px;
  transition: all 250ms ease;
  box-shadow: 0px 0px 4px -1px rgba(0,0,0,0.75);
  height: 30px;
  width: 100%; margin: 5px auto;
  background: lightgrey;
  &:hover{
    transition: all 250ms ease;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.75);
    cursor: pointer;
    color: white; background: green;
    border: 1px solid white;
  }
`;

const ItemBuySection = ({inStock, price, throwToBasket, handleQuantity}) => {

 
  const qtyOptions = [];

  for(let i=1; (i <= inStock && i <= 10); i++){
    qtyOptions.push( <option key={i} value={i}>{i}</option> )
    
  }


  return (
    <Container>

      <Price>
        <p>Price: £{price}</p>
        <p>Availability: {inStock > 0 ? (<InStock>In stock <i className="fa fa-check"></i></InStock>) : (<OutOfStock>Out of stock <i className="fa fa-times"></i></OutOfStock>)}</p>
      </Price>

      <Quantity>
        <div>
          <span>Quantity: </span>
          <Select name="" id="" onChange={(e) => handleQuantity(Number(e.target.value))} disabled={inStock === 0}>
            {qtyOptions}
          </Select>
        </div>

        <BuyButton onClick={throwToBasket}><i className="fa fa-shopping-cart"></i> Add to basket</BuyButton>
      </Quantity>

    </Container>
  )
}


export default ItemBuySection
