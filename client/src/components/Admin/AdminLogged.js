import React from 'react';
import { Wrapper, Button } from '../../layout/StyledComponents';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoutButton = styled(Button)`
  font-size: 1.25em;
  width: 90px;
  height: 50px;
`;
const Header = styled.h2`
  text-align: center;
`;

const DashboardButton = styled.button`
  font-family: 'Oswald', sans-serif;
  border: 0; border-radius: 3px;
  background: black;
  padding: 10px;
  color: white;
  width: 100%;
  margin-top: 25px;
  @media(max-width: 768px){
    margin: 5px 5px;
  }
  &:hover{
    cursor: pointer;
  }
`;


const AdminLogged = ({logout}) => {
  return (
    <Wrapper>
      <LogoutButton onClick={logout}>Log out</LogoutButton>

      <Header>Admin dashboard, version 1.0 <button>See updates changelog</button></Header>
      

      <Link to="/admin/settings"><DashboardButton>Shop Settings</DashboardButton></Link>

      <Link to="/admin/stock"><DashboardButton>Stock List</DashboardButton></Link>

      <Link to="/admin/change-ui"><DashboardButton>Change page look</DashboardButton></Link>

      Admin can feature (at least 3) products, make checkboxes here, create a category sections and a list of products in each.
      If admin will not feature at least 3 products, as a default, 5 most bought products will be featured (or nothing. We will see display=none)
    </Wrapper>
  )
}

export default AdminLogged
