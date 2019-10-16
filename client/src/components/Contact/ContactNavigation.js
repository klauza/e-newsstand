import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const ContactNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px;

  div{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    text-align: center;
    line-height: 50px;
    margin: 5px 0;
    background: lightgrey;
    box-shadow: inset 0px -2px 5px 0px rgba(0,0,0,0.75);
  
    &:hover{
      cursor: pointer;
      transition: background-color 150ms ease;
      background: lightgrey;
    }
    &.active{
      box-shadow: inset 0px 0px 0px 0px rgba(0,0,0,0.0);
      background: white;
      transition: background-color 150ms ease;
      /* background: green; */
      border-bottom: 1px solid transparent;
      border-top: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }
`;


const ContactNavigation = ({active, page, changePage}) => {

  const pages = [
      { title: "Contact", hash: "us", id: 0 },
      { title: "Delivery", hash: "delivery", id: 1 },
      { title: "About website", hash: "about", id: 2 },
      { title: "Staff", hash: "staff", id: 3 }
  ]

  return (
    <ContactNav>
      {pages.map((page, i) => <div className={`${active===i && "active"}`} key={i} onClick={()=>changePage(i, page.hash)}><span>{page.title}</span></div> )}
    </ContactNav>
  )
}

export default ContactNavigation
