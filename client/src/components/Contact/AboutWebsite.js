import React from 'react';
import { Wrapper, BackButton } from '../../layout/StyledComponents';
import AboutWebsiteWireframes from './AboutWebsiteWireframes';

const AboutWebsite = () => {
  return (
    <Wrapper>

      <BackButton>Back</BackButton>
      Author: Michal Klauza
      <div>Logo icon made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <AboutWebsiteWireframes />
    </Wrapper>
  )
}

export default AboutWebsite
