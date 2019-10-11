import React, { useState } from 'react';
import { Wrapper } from '../../layout/StyledComponents';
import ContactNavigation from './ContactNavigation';

import Delivery from './Delivery';
import AboutWebsite from './AboutWebsite';
import Staff from './Staff';
import Us from './Us';



const Contact = (props) => {
  const [page, setPage] = useState(props.location.hash);
  const [active, setActive] = useState(0);



  // functions
  const setHashUrl = (hash) => { 
    window.history.pushState(null, null, hash); 
  }
  const changePage = (i, hash) => {
    setActive(i);
    setPage(`#${hash}`);
    setHashUrl(`#${hash}`);
  }
  const renderPage = () => {
    switch(page){
      case "#us": return ( active !== 0 && setActive(0), <Us/> )
      case "#delivery": return ( active !== 1 && setActive(1), <Delivery /> )
      case "#about": return ( active !== 2 && setActive(2), <AboutWebsite /> )
      case "#staff": return ( active !== 3 && setActive(3), <Staff /> )
      
      default:
        return null
    }
  }


  // render
  return (
    <Wrapper>
      <ContactNavigation active={active} page={page} changePage={changePage}/>
      
      {renderPage()}
    </Wrapper>
  )
}

export default Contact
