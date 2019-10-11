import React from 'react';
import { Wrapper } from '../../layout/StyledComponents';
import styled from 'styled-components';


const DeliveryWrapper = styled.div`
  border: 1px solid black;
`;
const Postage = styled.div`
  h2{
    text-align: center;
    &::after{
      content: ''; height: 1px; width: 150px; 
      margin: 0 auto;
      display: block;
      background: black;
    }
  }
`;
const Timing = styled.div`

`;
const ReturnPolicy = styled.div`

`;

const Delivery = () => {
  return (
    <Wrapper>
      
      <DeliveryWrapper>
        
        <Postage>
          <h2>Delivery</h2>
          <p>We send parcels as a priority, give 2-3 business days for a middleman</p>
        </Postage>

        <Timing>
          <h3>Duration</h3>
          <p>We make a delivery within 24 hours from a purchase</p>
        </Timing>

        <ReturnPolicy>
          <h3>Return policy</h3>
          <p>After receiving the item, cancel the purchase within 14 days</p>
          <p>Return postage: Buyer pays a return fees</p>
        </ReturnPolicy>
        
      </DeliveryWrapper>
    </Wrapper>
  )
}

export default Delivery
