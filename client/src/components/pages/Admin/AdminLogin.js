import React, { useEffect, useState } from 'react';
import history from '../../../history';
import { connect } from 'react-redux';
import { loadAdmin, adminLogin, adminLogOut } from '../../../actions/adminActions';

import AdminLogged from './AdminLogged';
import { Container, Header, LoginContainer } from './AdminLoginCSS';

const AdminLogin = ({loadAdmin, adminLogin, adminLogOut, admin: {loading, token, admin, isAuthenticated}}) => {


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

    adminLogin({
      email: user.email,
      password: user.password
    });
    // show overlay loading loggin screen for one second!



    
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
      <AdminLogged logout={logout} loadAdmin={loadAdmin} />
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {loadAdmin, adminLogin, adminLogOut})(AdminLogin)
