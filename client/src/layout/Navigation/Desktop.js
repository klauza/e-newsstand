import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import { logo } from '../../media/index';


const DesktopNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: black;

  @media(max-width: 768px){ display: none; }
`;

const DesktopNav = styled.div`
  display: flex; flex-direction: row;
  width: 70%; 
  height: 60px;
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
  border: 1px solid red;
  width: 150px; height: auto;
  display: flex; flex-direction: row;
    align-items: center;
  div{
    width: 50px; height: 50px;
    img{
      object-position: top center;
      width: 100%; height: 100%; object-fit: cover;
    }
  }
  span{
    text-align: center;
    width: 100px;
    color: white;
  }


`;


const Desktop = () => {
  return (
    <DesktopNavWrapper>
      <DesktopNav>
        <NavLogo><div><img src={logo} alt=""/></div> <span>E-newsStand</span></NavLogo>

        <Navlinks/>
      </DesktopNav>
    </DesktopNavWrapper>
  )
}

export default Desktop
