import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  display: grid; grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 10px;
  align-content:center;
  justify-items: center;
  transform: translateY(-15%);
  div{
    width: 100%;
    border: 1px solid red;
    background: white;
  }
`;
const HomeCards2 = () => {
  return (
      <Grid>
        <div><h1>T</h1><span>rust</span></div>
        <div><h1>R</h1><span>eliability</span></div>
        <div><h1>S</h1><span>olidity</span></div>
      </Grid>
  )
}

export default HomeCards2
