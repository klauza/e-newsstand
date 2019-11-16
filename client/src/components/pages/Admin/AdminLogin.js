import React, { useEffect, useState } from 'react';
import history from '../../../history';
import { connect } from 'react-redux';
import { setUpdating, loadAdmin, adminLogin, adminLogOut } from '../../../actions/adminActions';

import AdminLogged from './AdminLogged';
import { Container, Header, LoginContainer } from './AdminLoginCSS';
import UpdatingScreen from '../../layout/ReusableComponents/UpdatingScreen';

const AdminLogin = ({setUpdating, loadAdmin, adminLogin, adminLogOut, admin: {loading, token, admin, isAuthenticated, isUpdating}}) => {

  const [firstLogin, setFirstLogin] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(()=>{
    if(token && !isAuthenticated) loadAdmin();

    

  // eslint-disable-next-line
  }, [isAuthenticated])

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const submitLogin = (e) => {
    e.preventDefault();
    setUpdating(true);

    setFirstLogin(true);

    adminLogin({
      email: user.email,
      password: user.password
    });
  }

  const logout = () => {
    adminLogOut();
    history.push('/');
    window.location.reload();
  }

  

  if(loading){
    return (
      <Container>
        <Header>Admin panel</Header>

        <LoginContainer>
          <h3>Login</h3>
          <form onSubmit={submitLogin}>
            <input 
              value={user.email}
              name="email"
              type="email" 
              placeholder="email"
              onChange={onChange}
              
            />
            <input 
              value={user.password}
              name="password"
              type="password"
              placeholder="password"
              onChange={onChange}
              
            />
            <input type="submit" value="SUBMIT" />
          </form>
        </LoginContainer>

      </Container>
    ) 
  } else{
    return(
      <AdminLogged admin={admin} firstLogin={firstLogin} logout={logout} loadAdmin={loadAdmin} setUpdating={setUpdating} />
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {setUpdating, loadAdmin, adminLogin, adminLogOut})(AdminLogin)
