import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const DesktopNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: black;

  @media(max-width: 767px){ display: none; }
`;

const DesktopNav = styled.div`
  display: flex; flex-direction: row;
  width: 70%; 
  margin: 0 auto;
  padding: 0 10px;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 95%; }
  .nav-links{
    display: flex;
    flex-direction: row;
    line-height: 60px;
  }
  .nav-links li{
    margin: 0 10px;
    list-style: none;
  }
  .nav-links a{
    color: white;
    text-decoration: none;
  }
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
      <DesktopNav>
        <NavLogo><span>LOGO</span></NavLogo>

        <Navlinks/>
      </DesktopNav>
    </DesktopNavWrapper>
  )
}

export default Desktop
