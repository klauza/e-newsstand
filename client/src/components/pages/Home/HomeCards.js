import React from 'react';
import styled from 'styled-components';
import SvgChecklist from '../../../Icons/Checklist';
import SvgHourglass from '../../../Icons/Hourglass';
import SvgTrusted from '../../../Icons/Trusted';
import Hole from '../../../media/Home/373.jpg';

const Container = styled.div`
  width: 100%;
  transform: translateY(-35%);
  display: grid;
  justify-content: center;
  background: #d8d6d7;
  padding: 50px 0;
  .background{
    width: 100%;
    background: url(${props => props.background}) no-repeat;
    background-position: center center;
    background-size: cover;
  }
  h2{
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-family: sans-serif;
  }
`;
const Grid = styled.div`
  width: 100%;
  display: grid; grid-template-columns: repeat(3, minmax(0, 200px));
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  align-content:center;
  justify-items: center;
  @media(max-width:768px){
    grid-gap: 0px;
  }
  div{
    position: relative;
    span{
      font-family: 'Lato', sans-serif;
      letter-spacing: 7px;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: white;
      text-shadow: 2px 2px #000;
      background: black;
    }

    svg{
      width: 100%; height: auto;
      path{
        stroke: black;
      }
    }
    /* border: 2px solid red; border-radius: 4px; */
    width: 100%; height: 0; padding-bottom: 100%;
    position: relative;
    /* background: white; */
    /* box-shadow: 0 3px 5px -1px rgba(0,0,0,.65); */
  }
  div:nth-child(1),
  div:nth-child(3){
    width: 85%; padding-bottom: 85%;
  }
  div:nth-child(3) span,      
  div:nth-child(1) span{      
    top: 100%; left: 50%;
    transform: translateX(-50%);
  }

`;


const HomeCards = () => {
  return (
    <Container background={Hole}>
      <div className="background">
        <h2>What will you find here?</h2>
        <Grid>
          <div><SvgChecklist/><span>Trust</span></div>
          <div><SvgHourglass/><span>Reliability</span></div>
          <div><SvgTrusted/><span>Solidity</span></div>
        </Grid>
      </div>
    </Container>
  )
}

export default HomeCards
