import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const DesktopNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  /* background: rgba(45,98,110, 0.9); */
  background: #727ba1;

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
      /* border-left: 1px solid green;
      border-right: 1px solid green; */
      text-align: center;
      height: 100%;
      list-style: none;
      display: grid;
      align-items: center;
   
      a{
        font-family: 'Lato', sans-serif;
        display: block;
        height: 100%;
        /* line-height: 30px; */
        color: white;
        text-decoration: none;
        display: grid;
        grid-template-rows: 30px 30px;
        justify-items: center;
        align-items: center;

        position: relative;
       
        svg{
          position: absolute; top: 15%;
          left: 50%;
          /* top: 50%; left: 50%; */
          transform: translateX(-50%);
          margin: 0 auto -5px;
          width: 20px; height: 20px;
        }

        .active-svg{
          display: none;
        }
        .inactive-svg{
          display: block;
        }
        .link-text{
          align-self: flex-start;
        }

        &.active{
          .inactive-svg{
            display: none;
          }
          .active-svg{
            display: block;
            fill: white;
          }

          svg path,
          svg circle{
            fill: lightgrey;
          }
          color: lightgrey;
        }

        &:hover{
        
          color: lightgrey;
        /* color: lightgrey; */
        svg path,
          svg circle{
            fill: lightgrey;
          }
        }
      
        &:active{
          svg path,
          svg circle{
            transition: 175ms ease transform;
            transform: scale(0.875);
            transform-origin: center;
          }
        }

      }

      
    }

    .link-logo{
      grid-area: logo;
      border-bottom: 1px solid lightgrey;
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
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
    .link-contact{
      border-left: 1px solid white;
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
          <Navlinks isDesktop={true}/>
        </ul>
      </DesktopNav>
    </DesktopNavWrapper>
  )
}

export default Desktop
