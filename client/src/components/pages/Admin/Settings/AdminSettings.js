import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAdmin } from '../../../../actions/adminActions';

import styled from 'styled-components';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';
import { UIBtn } from '../../../layout/ReusableComponents/UIButtons';

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

const AdminSettings = ({loadAdmin, admin: {admin, token, loading, isAuthenticated}}) => {

  useEffect(()=>{
    if(token && !isAuthenticated) loadAdmin();
  // eslint-disable-next-line
  }, []);

  
  if(!loading && isAuthenticated){
  return (
    <Container>

      <Header>Shop settings</Header>
      <div>Current version: 1.0</div>
      <h2>EMAIL</h2>
      <p>Change your coresponding admin e-mail, which receives automated mails from customers shoppings</p>
      <p>Your current email: {admin.email}</p>
      <UIBtn info innerText="Change your email" style={{margin: "10px auto"}} />

      <h2>PASSWORD</h2>
      <p>Change your current password</p>
      <UIBtn blue innerText="Change password" style={{margin: "10px auto"}} />


    </Container>
  )
} else {
  if(token){
    return(<div>Authenticating...</div>) 
  } else{
    return <Redirect to="/" exact /> // redirect if authentication failed
  }
}

}


const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {loadAdmin})(AdminSettings)