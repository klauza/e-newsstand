import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeroImage } from '../media/index';

const HeroWrapper = styled.div`
  position: relative;
  width: 100%; height: calc(100vh - 60px);
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
  div{
    padding: 50px;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.5);
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 50%;
    text-align: center;
    @media(max-width: 1200px){ width: 90%; }
    
    p{
      color: white; font-size: 2em; font-family: Verdana, sans-serif;
    }
    button{
      border: 1px solid white; border-radius: 2px;
      padding: 15px 35px; margin: 10px 0;
      box-shadow: 0 2px 1px 1px rgba(0,0,0,0.3);
      background: white; color: black;
      transition: background-color 200ms ease, color 200ms ease;
      &:hover{
        cursor: pointer;
        background: black; color: white;
        transition: background-color 200ms ease-out, color 200ms ease-out;
      }
    }
  }
`;
const Home_Hero = () => {
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

export default Home_Hero
