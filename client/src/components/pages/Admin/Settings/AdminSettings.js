import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';

const Container = styled(Wrapper)`
  p{
    margin-top: 35px;
    text-align: center;
  }
`;
const Header = styled.h1`
  text-align: center;
`;

const AdminSettings = () => {
  return (
    <Container>

      <Header>Shop settings</Header>
      
      <p>Change your coresponding admin e-mail, which receives automated mails from customers shoppings</p>

    </Container>
  )
}

export default AdminSettings
