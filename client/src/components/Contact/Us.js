import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import SvgEmail from '../../Icons/Email';
import SvgDeal from '../../Icons/Deal';
import SvgPhone from '../../Icons/Phone';


const ContainerPosed = posed.div({
  loaded: {
    delayChildren: 500, 
    staggerChildren: 125
  }
})
const Container = styled(ContainerPosed)`
  display: grid; grid-template-columns: repeat(3, minmax(auto, 250px)); grid-auto-rows: 200px;
  justify-content: space-between; 
  margin-top: 75px;
  font-family: 'Lato', sans-serif;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  i{
    display: block; text-align: center;
    font-size: 3em;
  }

  @media(max-width: 768px){
    top: 0; margin-bottom: 100px;
    grid-template-columns: 1fr; 
    grid-auto-rows: auto;
    margin-top: 0;
    /* margin-bottom: 100px; */
  }
`;


const Card = styled.div`
  text-align: center; 
  svg{
    width: 50px; height: 50px;
  }
  i::after{
    content: ''; display: block; 
    width: 60px; height: 1px; margin: 10px auto;
    background: black;
  }
  span{
    line-height: 23px;
    margin-bottom: 10px;
    display: block; 
  }
  a{
    color: blue;
    display: block;
    &:active{
      color: purple;
    }
  }

  @media(max-width: 768px){
    padding: 25px 0;
    border-bottom: 1px solid lightgrey;
    i::after{ display: none; }
    span{
      padding: 0 7.5px;
    }
  }
`;

const Span = posed.span({
  loaded: { y: 0, opacity: 1 },
  notLoaded: { y: -20, opacity: 0 }
});



const Us = () => {

  const [isloaded, setIsLoaded] = React.useState(false);

  React.useEffect(()=>{
    setIsLoaded(true);
  }, [])
  return (
    <Container pose={isloaded ? 'loaded' : 'notLoaded'}>
      <Card>
        <SvgPhone />
        <Span>We are under the phone each day, including Sunday from 9am to 3pm. So grab a phone and have a chat with us.</Span>
        <a href="tel:0928348643">09283486433</a>
      </Card>

      <Card>
        <SvgEmail />
        <Span>You can write an e-mail to us. We are keen to answer any question you got. Send it to this mail:</Span>
        <a href="mailto:shop@email.com">shop@email.com</a>
      </Card>

      <Card>
        <SvgDeal />
        <Span>If you'd like to, you can visit us in-person. You can also make a shopping in our place.</Span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Gorgon+Rd,+Sunset+Beach+WA+6530,+Australia/@-28.7260757,114.6236067,17z/data=!3m1!4b1!4m5!3m4!1s0x2bda45fbf1164d19:0xebcb4e2ba4bbfd64!8m2!3d-28.7260757!4d114.6257954">Australia, 44 Gorgon rd.</a>
      </Card>
    </Container>
  )
}

export default Us
