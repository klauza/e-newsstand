import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%; margin: 0 auto;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.45);
  /* border: 1px solid yellow; */
  text-align: center;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  display: grid; grid-template-columns: 1fr 4fr 1fr;
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
  h2{
    margin: 25px 0;
  }
  p{
    line-height: 30px;
  }
`;
const AboutText = styled.div`
  width: 50%; margin: 0 auto 25px;
  @media(max-width: 1200px){ width: 70%; }
  @media(max-width: 768px){ width: 90%; }
`;

const Fill = styled.div`
  background: lightgrey;
  @media(max-width: 768px){
    display: none;
  }
`;


const AboutUs = () => {
  return (
    <Container>
      <Fill></Fill>
      <AboutText>
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, et recusandae consequatur esse laborum illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate facilis dignissimos totam excepturi libero voluptatum quasi quas iste suscipit odio necessitatibus ipsam architecto aperiam obcaecati est, impedit veniam? Maxime!</p>
      </AboutText>
      <Fill></Fill>
    </Container>
  )
}

export default AboutUs
