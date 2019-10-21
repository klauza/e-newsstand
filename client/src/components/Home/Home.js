import React, {useEffect, createRef} from 'react';
import HomeHero from './HomeHero';
import HomeFeaturedProducts from './HomeFeaturedProducts';
import LatestProducts from './LatestProducts';
import AboutUs from './AboutUs';


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
      <HomeHero refs={refs} handleClick={handleClick} anchor={anchors[0]} />
      <HomeFeaturedProducts refs={refs} handleClick={handleClick} anchor={anchors[1]} />
      <AboutUs />
      <LatestProducts refs={refs} handleClick={handleClick} anchor={anchors[2]} />
    </div>
  )
}

export default Home
