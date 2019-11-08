import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import SvgBox from '../../../Icons/Box';


const Container = styled.div`
  margin-top: 75px;
  display: flex; flex-direction: column;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  font-family: 'Lato', sans-serif;
  @media(max-width: 768px){
    margin-bottom: 100px;
    top: 0;
    margin-top: 0;
  }
`;
const DeliveryWrapperPose = posed.div({
  loaded: {
    delayChildren: 500, 
    staggerChildren: 250
  }
})
const DeliveryWrapper = styled(DeliveryWrapperPose)`

`;
const Postage = styled.div`
  svg{
      width: 100px; height: 100px;
      margin: 0 auto;
      display: block;
  }
  h2{
    text-align: center;
    
    &::after{
      content: ''; height: 1px; width: 25%; 
      margin: 15px auto;
      display: block;
      background: lightgrey;
    }
  }
`;
const TimingPose = posed.div({
  loaded: { y: 0, opacity: 1 },
  notLoaded: { y: -20, opacity: 0 }
})
const Timing = styled(TimingPose)`
  h3{
    margin-bottom: 5px;
  }
  margin-top: 50px;
  text-align: center;
`;
const ReturnPolicyPose = posed.div({
  loaded: { y: 0, opacity: 1 },
  notLoaded: { y: -20, opacity: 0 }
})
const ReturnPolicy = styled(ReturnPolicyPose)`
  h3{
    margin-bottom: 5px;
  }
  margin-top: 50px;
  text-align: center;
`;

const Delivery = () => {

  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(()=>{
    setIsLoaded(true);
  }, [])

  return (
    <Container>
      
      <DeliveryWrapper pose={isLoaded ? 'loaded' : 'notLoaded'}>
        
        <Postage>
          <h2>Delivery</h2>
          <SvgBox />
        </Postage>

        <Timing>
          <h3>Duration</h3>
          <p>We send parcels as a priority, give 2-3 business days for a middleman</p>
          <p>We make a delivery within 24 hours from a purchase</p>
        </Timing>

        <ReturnPolicy>
          <h3>Return policy</h3>
          <p>After receiving the item, cancel the purchase within 14 days</p>
          <p>Return postage: Buyer pays a return fees</p>
        </ReturnPolicy>
        
      </DeliveryWrapper>
    </Container>
  )
}

export default Delivery
