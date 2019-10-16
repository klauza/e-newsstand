import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
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
    position: unset;
    grid-template-columns: 1fr; 
    grid-auto-rows: auto;
    margin-top: 0;
    /* margin-bottom: 100px; */
  }
`;

const Card = styled.div`
  text-align: center; 
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



const Us = () => {
  return (
    <Container>
      <Card>
        <i className="fa fa-volume-control-phone"></i>
        <span>We are under the phone each day, including Sunday from 9am to 3pm. So grab a phone and have a chat with us.</span>
        <a href="tel:0928348643">09283486433</a>
      </Card>

      <Card>
        <i className="fa fa-envelope-o"></i>
        <span>You can write an e-mail to us. We are keen to answer any question you got. Send it to this mail:</span>
        <a href="mailto:shop@email.com">shop@email.com</a>
      </Card>

      <Card>
        <i className="fa fa-paper-plane-o"></i>
        <span>If you'd like to, you can visit us in-person. You can also make a shopping in our place.</span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.co.uk/maps/place/Gorgon+Rd,+Sunset+Beach+WA+6530,+Australia/@-28.7260757,114.6236067,17z/data=!3m1!4b1!4m5!3m4!1s0x2bda45fbf1164d19:0xebcb4e2ba4bbfd64!8m2!3d-28.7260757!4d114.6257954">Australia, 44 Gorgon rd.</a>
      </Card>
    </Container>
  )
}

export default Us
