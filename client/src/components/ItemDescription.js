import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 100%; height: 100px;
`;

const ItemDescription = ({longDesc}) => {
  return (
    <Container>
      DESCRIPTION: {longDesc}
    </Container>
  )
}

export default ItemDescription
