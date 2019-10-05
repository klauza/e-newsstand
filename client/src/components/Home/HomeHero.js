import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeroImage } from '../../media/index';

const HeroWrapper = styled.div`
  position: relative;
  width: 100%; height: calc(100vh - 60px);
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
  div{
    padding: 50px;
    background: rgba(45,98,110, 0.45);
    border: 1px solid rgba(255,255,255,0.5);
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 50%;
    text-align: center;
    @media(max-width: 1200px){ width: 90%; }
    
    p{
      color: #fff;
      text-transform: uppercase;
      /* background: #0e8dbc; */
      text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
      font-size: 2em; font-family: Verdana, sans-serif;

      &::after{
        content:'';
        display: block;
        margin: 15px 0 10px;
        border-bottom: 1px solid black;
        border-image: linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.75), white, rgba(255,255,255,0.75), rgba(0,0,0,0));
        border-image-slice: 5;
      }
   
    }
    button{
      border: 1px solid white; border-radius: 2px;
      padding: 15px 35px; margin: 5px 0 0;
      box-shadow: 0 2px 1px 1px rgba(0,0,0,0.3);
      background: white; color: black;
      transition: background-color 200ms ease, color 200ms ease;
      &:hover{
        cursor: pointer;
        background: #b0551e; color: white;
        transition: background-color 200ms ease-out, color 200ms ease-out;
      }
    }
  }
`;
const HomeHero = () => {
  return (
    <HeroWrapper>
      <img src={HeroImage} alt=""/>
      <div>
        <p>Welcome to our humble shop</p>
        <Link to="/shop"><button>SHOP</button></Link>
      </div>
    </HeroWrapper>
  )
}

export default HomeHero
