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
const ColorBox = styled.div`
  width: 20px; height: 20px;
  margin: 0 2.5px;
  background-color: ${props => props.color};
  display: inline-block;
  line-height: 20px;
  cursor: pointer;
  &:hover{
    outline-offset: 1px;
    outline: 1px solid black;
  }
  position: relative;
  /* Tick above box */
  &.picked_color{
    pointer-events: none;
    &::before{
      content: '';
      position: absolute;
      top: -7.5px; left: 32.5%; transform: translateX(-50%) rotate(45deg);
      display: block;
      width: 5px; height: 2px; 
      background: #000;
    }
    &::after{
      content: '';
      position: absolute;
      top: -9px; left: 52%; transform: translateX(-50%) rotate(-45deg);
      display: block;
      width: 10px; height: 2px; 
      background: #000;
    }


  }
`;


const ItemBuySection = ({inStock, price, colors, throwToBasket, handleQuantity, handleColor}) => {

 
  const qtyOptions = [];

  for(let i=1; (i <= inStock && i <= 10); i++){
    qtyOptions.push( <option key={i} value={i}>{i}</option> )
    
  }

  const addColorClass = (e) => {
    // del previous color class
    Array.from(e.target.parentNode.children).forEach(colorBox => colorBox.classList.remove('picked_color'));
    // add new color class
    e.target.classList.add('picked_color');
  }

  return (
    <Container>

      <Price>
        {colors !== undefined && <div>Available colors: {colors.map((color,id) => <ColorBox key={id} color={color} onClick={(e)=>{handleColor(color); addColorClass(e)}}></ColorBox>)}</div>}
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
