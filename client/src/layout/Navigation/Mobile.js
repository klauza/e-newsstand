import React, {useState} from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MobileNavWrapper = styled.div`
  position: fixed; top: 0;
  z-index: 98;
  display: flex; flex-direction: row;
  width: 100%;
  height: 50px;
  background: black;
  font-family: 'Oswald', sans-serif;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6); 
  @media(min-width: 769px){ display: none; }

  /* NON-HAMBURGER MENU */
  /* HAMBURGER - HOME | SHOP - BASKET */
  &>li{ display: none; } /* hide all links, display only the above ones */
  &>.link-home, 
  &>.link-shop,
  &>.link-basket{
    display: block;
    border: 1px solid white;

    /* default */
    a svg.active-svg{ display: none; }
    a svg.inactive-svg{ display: block; }

    /* active */
    a.active svg.active-svg{ display: block; }
    a.active svg.inactive-svg{ display: none; }
  }


  /* HOME */
  &>.link-home{
    width: 50px; height: 50px;
    a{
      display: grid; 
      align-items: center; justify-items: center;
      width: 50px; height: 50px;
      svg{
        width: 30px; height: 30px;
        fill: white;
        margin-bottom: 5px; margin-right: 2px;
      }
    }
  }

  &>.link-shop, &>.link-basket{
    width: calc((100vw - 100px) / 2);
    a{ 
      display: flex; flex-direction: row;
      align-items: center; justify-content: center;
      text-decoration: none;

      line-height: 50px; 
      color: white; 
      .link-text{
        margin-left: 10px;
      }
      svg{
        width: 22.5px; height: 22.5px;
        fill: white;
      }
    }

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
  position: absolute; top: 0; right: 0;
  display: flex; flex-direction: column;
  width: calc(100% - 50px); height: 100vh;

  transition: transform 450ms, opacity 450ms;
  transform: translateX( ${ props => props.toggled ? ("0") : ("calc(100% + 15px)")} );
  opacity: ${ props => props.toggled ? ("1") : ("0")};

  background: grey;
  box-shadow: -3px 0px 5px -2px rgba(0,0,0,0.75);
  border-left: 1px solid black;

  .nav-links{
    display: flex;
    flex-direction: column;

    li{
      a{
        border-bottom: 1px dashed lightgrey;
        width: 100%; 
        line-height: 50px;
        display: grid; grid-template-columns: 50px auto;
        align-items: center; justify-items: center;
        
        .link-text{
          margin-left: -37.5px;
        }

        svg{
          width: 25px; height: 25px;
          fill: white;
          &.active-svg{ display: none; }
          &.inactive-svg{ display: block; }
        }

        &.active{
          svg.active-svg{ display: block; }
          svg.inactive-svg{ display: none; }
        }

        &:hover{
          background: lightgrey;
        }
      }
    }

    .link-logo{
      display: flex; flex-direction: row;
      justify-content: center; align-items: center;
      padding: 25px 0;
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
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.55);

        &[type=submit]{ 
          color: red; 
          &:hover{ cursor: pointer; }
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

  const [toggled, setToggled] = useState(true);
  

  const toggleMobileNav = () => {
    setToggled(!toggled);

    // block scrolling
    if(!toggled){ 
      document.querySelector('body').style.overflowY = "hidden";
    } else { 
      document.querySelector('body').style.overflowY = "scroll";
    } 
  }

  const hideMobileNav = () => {
    setToggled(false);
    document.querySelector('body').style.overflowY = "scroll";
  }

  return (
    <MobileNavWrapper>

      <MenuBtn onClick={toggleMobileNav}>{toggled ? (<i className="fa fa-times"></i>) : (<i className="fa fa-bars"></i>)}</MenuBtn> 
      <Navlinks mobileNotToggled={true} /> { /* showing only menuBtn, home, shop and basket */ }

      <MobileLinks toggled={toggled}>
        <ul className="nav-links">
          <Navlinks mobileToggled={true} hideMobileNav={hideMobileNav} />  { /* showing all links */ }
        </ul>
      </MobileLinks>

    </MobileNavWrapper>
  )
}

export default Mobile
