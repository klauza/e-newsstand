import React, { useState } from 'react';
import { Wrapper } from '../../layout/StyledComponents';
import ContactNavigation from './ContactNavigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import Delivery from './Delivery';
import AboutWebsite from './AboutWebsite';
import Staff from './Staff';
import Us from './Us';


const ContactAnimations = styled.div`
  .contact-animations{
    .contact-enter {
      transform: translateY(-25px);
      opacity: 0;
      z-index: 1;
    }
    .contact-enter.contact-enter-active {
      transform: translateY(0);
      opacity: 1;
      transition: opacity 300ms linear 300ms, transform 300ms linear 300ms;
    }

    .contact-exit {
      transform: translateY(0);
      opacity: 1;
    }

    .contact-exit.contact-exit-active {
      transform: translateY(25px);
      opacity: 0;
      transition: opacity 300ms linear, transform 300ms linear;   
        
    }
    .contact-exit-done{
      opacity: 0;
    }
  }
`;

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

      <ContactAnimations>
        <TransitionGroup className="contact-animations">
          <CSSTransition

            key={active}
            timeout={600}
            classNames="contact"
          >
            {renderPage()}
          </CSSTransition>
        </TransitionGroup>
      </ContactAnimations>

    </Wrapper>
  )
}

export default Contact
