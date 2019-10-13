import React, {useState} from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MobileNavWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex; flex-direction: row;
  width: 100%;
  height: 50px;
  background: black;
  font-family: 'Oswald', sans-serif;
  @media(min-width: 769px){ display: none; }

  /* NON-HAMBURGER MENU */
  &>li{ display: none; }
  &>.link-shop, &>.link-basket, &>.link-home{
    display: block;
  }
  &>.link-home{
    i{
      width: 100%;
      line-height: 50px; text-align: center;
      width: 50px;
      height: 100%;
      background: black;
      border: 1px solid white; outline: none;
      color: white;
      font-size: 2em;
    }
    &:active i{
      background: grey;
    }
  }
  &>.link-shop, &>.link-basket{
    
    
    a{ text-align: center; line-height: 50px; color: white; text-decoration: none; display: block; width: 100%; height: 100%; }
    border: 1px solid white;
    width: calc((100vw - 100px) / 2);
    &:active{
      background: grey;
    }
  }

`;
const MenuBtn = styled.button`
  height: 100%;
  width: 50px;
  background: black;
  border: 1px solid white; outline: none;
  i{
    color: white;
    font-size: 2em;
  } 
  &:hover{
    cursor: pointer;
  }
  &:active{
    background: grey;
  }
`;

// HAMBURGER MENU
const MobileLinks = styled.div`
  z-index: 99;
  background: grey;
  width: calc(100% - 49px); height: 100vh;
  position: fixed; top: 0; right: 0;
  transition: transform 450ms, opacity 450ms;
  transform: translateX( ${ props => props.toggled ? ("0") : ("calc(100% + 15px)")} );
  opacity: ${ props => props.toggled ? ("1") : ("0")};
  display: flex; flex-direction: column;


  .nav-links{
    display: flex;
    flex-direction: column;

    li{
      a{
        border-bottom: 1px dashed lightgrey;
        text-align: center;
        width: 100%; line-height: 50px;
        display: block;
        &:hover{
          background: lightgrey;
        }
      }
    }

    .link-logo{
      padding: 25px 0;
      display: flex; flex-direction: row;
      justify-content: center; align-items: center;
      outline: 1px solid white; outline-offset: -15px;
      div{
        width: 50px; height: 50px;
        img{  width: 100%; height: 100%; object-fit: cover; }
      }
      span{ padding-left: 10px; color: white; font-size: 1.35em; font-weight: 700; }
    }

    .link-search{
      position: absolute;
      bottom: 100px; left: 50%; transform: translateX(-50%);
      form input{
        width: 70vw; padding: 12.5px 5px;
        font-size: 1.05rem;
        border: 0;
        font-family: 'Oswald', sans-serif;
        &[type=text]{
          
        }
        &[type=submit]{ 
          color: red; 
          box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.55);
          &:hover{
            cursor: pointer;
          }
        }
      }
      
    }
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
  const hideMobileNav = () => {
    setToggled(false);
  }

  return (
    <MobileNavWrapper>

      <MenuBtn onClick={toggleMobileNav}>{toggled ? (<i className="fa fa-times"></i>) : (<i className="fa fa-bars"></i>)}</MenuBtn> 
      <Navlinks showIcon={true} /> { /* showing only home, shop and basket */ }

      <MobileLinks toggled={toggled}>
        <ul className="nav-links">
          <Navlinks hideMobileNav={hideMobileNav} />  { /* showing all links */ }
        </ul>
      </MobileLinks>

    </MobileNavWrapper>
  )
}

export default Mobile
