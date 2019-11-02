import React, {useEffect, createRef} from 'react';
import { Link } from 'react-router-dom';
import HomeHero from './HomeHero';
import HomeFeaturedProducts from './HomeFeaturedProducts/HomeFeaturedProducts';
import LatestProducts from './NewestProducts/LatestProducts';
import AboutUs from './AboutUs';
import HomeCards from './HomeCards';
import HomeCards2 from './HomeCards2';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  left: 50%; transform: translateX(-50%);
  top: 2.5%;
  z-index: 3;
  border: 2px solid white;
  background: black;
  color: white;
  padding: 7px;
  font-family: sans-serif;
  cursor: pointer;
  box-shadow: 0 2px 2px -1px #000;
  outline: 1px solid white;
  outline-offset: 7.5px;
`;

const Home = () => {

  useEffect(()=>{
    window.scrollTo({  
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  // for scrolling on button click
  const anchors = [
    {
      id: 'a',
      title: "TOP"
    },
    {
      id: 'b',
      title: "featured products"
    },
    {
      id: 'c',
      title: "newest products"
    }
  ]

  const refs = anchors.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {})

  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  
  return (
    <div style={{position: "absolute", left: "0", right: "0"}}>
      <Link to="/admin"><Button style={{}}> <i className="fa fa-cog"></i> Admin panel</Button></Link>
      <HomeHero refs={refs} handleClick={handleClick} anchor={anchors[0]} />
      {/* <HomeCards /> */}
      <HomeCards2 />
      <HomeFeaturedProducts refs={refs} handleClick={handleClick} anchor={anchors[1]} />
      <AboutUs />
      <LatestProducts refs={refs} handleClick={handleClick} anchor={anchors[2]} />
    </div>
  )
}

export default Home
