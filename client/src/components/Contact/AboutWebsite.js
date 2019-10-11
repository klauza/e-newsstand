import React from 'react';
import AboutWebsiteWireframes from './AboutWebsiteWireframes';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 75px;
  display: flex; flex-direction: column;
  text-align: center;
`;

const AboutWebsite = () => {
  return (
    <Container>
      <h2>About</h2>
      <span>Author: Michal Klauza</span>
      <div>Logo icon made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      
      <AboutWebsiteWireframes />
    </Container>
  )
}

export default AboutWebsite
