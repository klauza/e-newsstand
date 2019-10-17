import React from 'react';
import { Wrapper, Button } from '../../layout/StyledComponents';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyled = styled(Button)`
  font-size: 1.25em;
  width: 90px;
  height: 50px;
`;
const Header = styled.h2`
  text-align: center;
`;

const ShopSettings = styled.button`
  font-family: 'Oswald', sans-serif;
  border: 0; border-radius: 3px;
  background: black;
  padding: 10px;
  color: white;
  width: 100%;
  @media(max-width: 768px){
    margin: 0 5px;
  }
  &:hover{
    cursor: pointer;
  }
`;
const StockList = styled(ShopSettings)`
  margin-top: 25px;
`;

const AdminLogged = ({logout}) => {
  return (
    <Wrapper>
      <ButtonStyled onClick={logout}>Log out</ButtonStyled>

      <Header>Admin dashboard</Header>

      <Link to="/admin/settings"><ShopSettings>Shop Settings</ShopSettings></Link>

      <Link to="/admin/stock"><StockList>Stock List</StockList></Link>

      Admin can feature (at least 3) products, make checkboxes here, create a category sections and a list of products in each.
      If admin will not feature at least 3 products, as a default, 5 most bought products will be featured (or nothing. We will see display=none)
    </Wrapper>
  )
}

export default AdminLogged
