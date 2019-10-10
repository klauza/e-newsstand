import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%; height: auto;
  margin: 25px 0 150px 0;
`;

const ItemDescription = ({longDesc}) => {
  return (
    <Container>
      <h3>DESCRIPTION: </h3> 
      <p>{longDesc}</p>
    </Container>
  )
}

export default ItemDescription
