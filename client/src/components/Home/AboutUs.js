import React from 'react';
import styled from 'styled-components';
import { ChildWrapper } from '../../layout/StyledComponents';

const Container = styled.div`
  width: 70%; margin: 0 auto;
  @media(max-width: 768px){ width: 90%; }
  border: 1px solid yellow;
  text-align: center;
  font-family: 'Lato', sans-serif;
  h3{
    margin: 25px 0;
  }
  p{
    line-height: 30px;
  }
`;

const AboutUs = () => {
  return (
    <ChildWrapper>
      <Container>
        <h3>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, et recusandae consequatur esse laborum illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate facilis dignissimos totam excepturi libero voluptatum quasi quas iste suscipit odio necessitatibus ipsam architecto aperiam obcaecati est, impedit veniam? Maxime!</p>
      </Container>
    </ChildWrapper>
  )
}

export default AboutUs
