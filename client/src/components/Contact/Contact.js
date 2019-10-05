import React from 'react';
import { Wrapper } from '../../layout/StyledComponents';
import ContactDelivery from './ContactDelivery';
import About from './About';

const Contact = () => {
  return (
    <Wrapper>
      Contact page

      -address-
      -helpline-
      <ContactDelivery />
      <About />
    </Wrapper>
  )
}

export default Contact
