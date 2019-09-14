import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const DesktopNavWrapper = styled.div`
  display: flex; flex-direction: row;
  width: 100%;
  height: 60px;
  background: black;
  .nav-links{
    display: flex;
    flex-direction: row;
    line-height: 60px;
  }
  .nav-links li{
    list-style: none;
  }
  .nav-links a{
    color: white;
    text-decoration: none;
  }
  @media(max-width: 767px){ display: none; }
`;
const NavLogo = styled.div`
  line-height: 60px;
  span{
    color: white;
  }
`;


const Desktop = () => {
  return (
    <DesktopNavWrapper>

      <NavLogo><span>LOGO</span></NavLogo>

      <Navlinks/>
      
    </DesktopNavWrapper>
  )
}

export default Desktop
