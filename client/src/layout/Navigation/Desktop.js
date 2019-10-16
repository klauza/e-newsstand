import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const DesktopNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #367887;
  /* background: #727ba1; */
  border-bottom: 1px solid lightgrey;
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
        display: grid;
        grid-template-rows: 30px 30px;
        justify-items: center; align-items: center;

        font-family: 'Lato', sans-serif;
        color: white;
        text-decoration: none;

        position: relative;
        svg{
          width: 20px; height: 20px;
          position: absolute; 
          top: 15%; left: 50%;
          transform: translateX(-50%);
          margin: 0 auto -5px;
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
          color: lightgrey;
          .active-svg{
            display: block;
            fill: white;
            path, circle{
              fill: lightgrey;
            }
          }

          .inactive-svg{
            display: none;
          }
        }

        &:hover{
          color: lightgrey;
          svg path, svg circle{
            fill: lightgrey;
          }
        }
        &:active{
          svg path, svg circle{
            transition: 175ms ease transform;
            transform: scale(0.875); transform-origin: center;
          }
        }
      }
    }

    .link-logo{
      grid-area: logo;
      width: 150px; height: auto;
      display: flex; flex-direction: row;
      align-items: center;
      border-bottom: 1px solid lightgrey;
      div{
        width: 50px; height: 50px;
        img{
          /* object-position: top center; */
          width: 100%; height: 100%; object-fit: cover;
        }
      }
      span{
        width: 100px;
        color: white;
      }
    }

    .link-home{
      grid-area: home;
      width: 70px;
    }
    .link-shop{
      grid-area: shop;
      width: 50px;
    }
    .link-basket{
      width: 110px;
      grid-area: basket;
      border-left: 1px solid white; border-right: 1px solid white;
    }
    .link-contact{
      grid-area: contact;
      width: 110px;
      border-left: 1px solid white;
    }
    .link-search{
      grid-area: search;
      position: relative;
      form{
        display: grid;
        align-items: center;
        height: 60px;
        width: auto;
        input{
          font-family: 'Lato', sans-serif;
          border: 1px solid black;
          border-radius: 3px;
        }
        input[type=text]{
          width: 125px;
          height: 30px;
          padding-left: 3px;
        }
        input[type=submit]{
          justify-self: right;
          align-self: flex-start;
          width: 97.5px;
          height: 25px;
          background: white;
          text-align: center;
          transition: background-color 200ms ease;
          &:hover{
            transition: background-color 200ms ease;
            background: lightgrey;
            cursor: pointer;
          }
        }
      }
      .deleteInputBtn{
        background: none;
        border: 0;
        position: absolute;
        bottom: 2px; left: 0;
        width: 25px; height: 25px;
      
        svg{ 
          fill: #fff;
          width: 100%; height: 100%;
        }
        &:hover svg{
          cursor: pointer;
          transition: transform 250ms ease;
          transform: rotate(180deg);
        }
      }
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
