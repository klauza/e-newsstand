import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const ContactNav = styled.div`
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: repeat(4, 1fr);

  div{
    border: 1px solid black;
    &:hover{
      cursor: pointer;
      transition: background-color 150ms ease;
      background: green;
    }
    &.active{
      transition: background-color 150ms ease;
      background: green;
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
