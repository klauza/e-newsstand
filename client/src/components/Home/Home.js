import React from 'react';
import HomeHero from './HomeHero';
import HomeFeaturedProducts from './HomeFeaturedProducts';


const Home = () => {
  return (
    <div style={{position: "absolute", left: "0", right: "0"}}>
      <HomeHero/>
      <HomeFeaturedProducts/>

    </div>
  )
}

export default Home
