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
    border: 2px solid white;
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 50%;
    @media(max-width: 1200px){ width: 90%; }
    
    p{
      color: white; font-size: 2em; font-family: Verdana, sans-serif;
    }
  }
`;
const Home_Hero = () => {
  return (
    <HeroWrapper>
      <img src={HeroImage} alt=""/>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <Link to="/shop"><button>Shop</button></Link>
      </div>
    </HeroWrapper>
  )
}

export default Home_Hero
