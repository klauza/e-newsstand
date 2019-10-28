import React from 'react';
import AboutWebsiteWireframes from './AboutWebsiteWireframes';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 75px;
  display: flex; flex-direction: column;
  text-align: center;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  font-family: 'Lato', sans-serif;
  h2{
    margin: 0 auto 25px;
  }
  ul li{
    list-style: none;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    border-top: 1px solid grey;
    padding: 5px 0;
    &:last-of-type{
      border-bottom: 1px solid grey;
    }
  }
`;

const AboutWebsite = () => {
  return (
    <Container>
      <h2>About</h2>
      <ul>
        <li>Author: Michal Klauza</li>
        <li>home icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>basket icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>Package icon made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>Logo icon <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <li>Contact icon<a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        <div>hourglass Icon <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>checklist Icon <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>trust Icon<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </ul>

      <AboutWebsiteWireframes />
    </Container>
  )
}

export default AboutWebsite
