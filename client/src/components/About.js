import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  h2{
    text-align: center;
  }
  
  a{
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1.05rem;

    button{
      margin-top: 50px;
      border: 1px solid black; border-radius: 2px;
      width: 120px; height: 60px;
      background: green; color: white;
      box-shadow: 0px 1px 1px 0 grey;
      &:hover{
        cursor: pointer;
        background: #4DAC27;
      }
    }

  
  }

    
`;

const About = () => {
  return (
    <AboutWrapper>
      <h2>About page</h2>
      <Link to="/about/wireframes"><button>Wireframes</button></Link>
    </AboutWrapper>
  )
}

export default About
