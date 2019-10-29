import React from 'react';
import styled from 'styled-components';
import Solidity from '../../media/Home/checklist.svg';
import Reliability from '../../media/Home/hourglass.svg'
import Trust from '../../media/Home/shield.svg';
import TestImage from '../../media/Home/373.jpg'

const Grid = styled.div`
  width: 100%;
  display: grid; grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 10px;
  align-content:center;
  justify-items: center;
  transform: translateY(-15%);
  font-family: 'Erica One', cursive;
  div{
    width: 100%;
    border-bottom: 1px solid grey; 
    border-left: 1px solid grey; 
    border-right: 1px solid grey; 
    border-radius: 3px;
    background: white;
    text-align: center;
  }
  div:nth-child(1) h1{
    background-image: url(${props => props.background[0]});
    background-position: center 56%;
    background-size: 100%;
  }
  div:nth-child(2) h1{
    background-image: url(${props => props.background[1]});
    background-position: center 58%;
    background-size: 80%;
  }
  div:nth-child(3) h1{
    background-image: url(${props => props.background[2]});
    background-position: center 58%;
    background-size: 80%;
  }
  div h1{
    background-repeat: no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 8em;
    display: inline-block;
    color: transparent;
    position: relative;
    text-shadow: 0 0 rgba(0,0,0,0.25);
  }

  span{
    letter-spacing: 5px;
    font-size: 1.15em;
    display: inline-block;
  }
  @media(max-width:768px){
    div>h1{
    font-size: 7em;
    }
    span{
      font-size: 0.85em;
      margin-top: -30px;
      display: block;
      text-align: center;
    }
  }
`;
const HomeCards2 = () => {
  return (
      <Grid background={[ Trust, Reliability, Solidity ]}>
        <div><h1>T</h1><span>rust</span></div>
        <div><h1>R</h1><span>eliability</span></div>
        <div><h1>S</h1><span>olidity</span></div>
      </Grid>
  )
}

export default HomeCards2
