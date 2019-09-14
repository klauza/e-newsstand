import React, {useState} from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MobileNavWrapper = styled.div`
  
  display: flex; flex-direction: row;
  width: 100%;
  height: 60px;
  background: black;
  @media(min-width: 768px){ display: none; }

`;
const MobileBtn = styled.div`

`;
const MobileLinks = styled.div`
  z-index: 99;
  background: grey;
  width: 50vw; height: 100vh;
  position: fixed; top: 0; right: 0;
  transition: transform 650ms;
  transform: translateX( ${ props => props.toggled ? ("0") : ("calc(100% + 15px)")} );
  display: flex; flex-direction: column;
  .nav-links{
    display: flex;
    flex-direction: column;
    /* line-height: 60px; */
  }
  .nav-links li{
    list-style: none;
  }
  .nav-links a{
    color: white;
    text-decoration: none;
  }
`;



const Mobile = () => {

  const [toggled, setToggled] = useState(false);

  const toggleMobileNav = () => {
    setToggled(!toggled);
  }

  return (
    <MobileNavWrapper>

      <MobileBtn onClick={toggleMobileNav}><button> Btn </button></MobileBtn> 

      <MobileLinks toggled={toggled}>
        <Navlinks />
      </MobileLinks>

    </MobileNavWrapper>
  )
}

export default Mobile
