import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const DesktopNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: black;

  @media(max-width: 768px){ display: none; }
`;

const DesktopNav = styled.div`
  width: 70%; 
  height: 60px;
  margin: 0 auto;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 95%; }
  .nav-links{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto 1fr auto auto 1fr auto auto;
    grid-template-areas: "logo home . shop search . contact basket";
    align-items: center;
    li{
      text-align: center;
      height: 100%;
      list-style: none;
      display: grid;
      align-items: center;
      a{
        display: block;
        height: 100%;
        line-height: 60px;
        color: white;
        text-decoration: none;
      }
      &:hover{
        background: grey;
      }
    }

    .link-logo{
      grid-area: logo;
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
    }
    .link-home{
      width: 70px;
      text-align: center;
      grid-area: home;
    }
    .link-shop{
      width: 50px;
      grid-area: shop;
    }
    .link-basket{
      width: 110px;
      grid-area: basket;
    }
    .link-contact{
      width: 110px;
      grid-area: contact;
    }
    .link-search{
      grid-area: search;
    }
  }


`;



const Desktop = () => {
  return (
    <DesktopNavWrapper>
      <DesktopNav>
        <ul className="nav-links">
          <Navlinks/>
        </ul>
      </DesktopNav>
    </DesktopNavWrapper>
  )
}

export default Desktop
