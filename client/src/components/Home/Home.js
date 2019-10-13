import React, {useEffect} from 'react';
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
  return (
    <div style={{position: "absolute", left: "0", right: "0"}}>
      <HomeHero />
      <HomeFeaturedProducts />
      <AboutUs />
      <LatestProducts />
    </div>
  )
}

export default Home
