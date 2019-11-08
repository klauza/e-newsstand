import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../../layout/ReusableComponents/StyledComponents';
import { UIBtn } from '../../layout/ReusableComponents/UIButtons';

const AdminTopBar = styled.div`
  margin: 0 2.5px;
  display: flex; flex-direction: row;
  justify-content: space-between;
`;

const Header = styled.h2`
  text-align: center;
`;

const AdminDashboardButtons = styled.div`
  display: flex; flex-direction: column;
  margin: 25px 5px 0;
  a{
    margin: 10px 0;
  }
  button{
    width: 100%;
    font-family: 'Oswald', sans-serif;
    color: white;
    background: #000;
  }
`;


const AdminLogged = ({logout}) => {
  return (
    <Wrapper>

      <AdminTopBar>
        <UIBtn exit onClick={logout} innerText="Log out" fontIcon="fa fa-power-off" />
        <UIBtn info innerText="See updates changelog" />
      </AdminTopBar>
     
      <Header>Admin dashboard, version 1.0 </Header>
      
      <AdminDashboardButtons>
        <Link to="/admin/settings"> <UIBtn innerText="Shop Settings" /> </Link>

        <Link to="/admin/stock"> <UIBtn innerText="Stock List" /> </Link>

        <Link to="/admin/change-ui"> <UIBtn innerText="Change page look" /> </Link>
      </AdminDashboardButtons>

      Admin can feature (at least 3) products, make checkboxes here, create a category sections and a list of products in each.
      If admin will not feature at least 3 products, as a default, 5 most bought products will be featured (or nothing. We will see display=none)
    </Wrapper>
  )
}

export default AdminLogged
