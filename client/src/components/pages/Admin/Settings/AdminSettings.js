import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';

const Container = styled(Wrapper)`
  text-align: center;
  p{
    margin-top: 35px;
  }
`;
const Header = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

const AdminSettings = () => {
  return (
    <Container>

      <Header>Shop settings</Header>
      <div>Current version: 1.0</div>
      
      <p>Change your coresponding admin e-mail, which receives automated mails from customers shoppings</p>
      <p>Your current email: [fetch here]</p>

    </Container>
  )
}

export default AdminSettings
