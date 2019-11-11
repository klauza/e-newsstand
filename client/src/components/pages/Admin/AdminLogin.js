import React, { useState } from 'react';
import { connect } from 'react-redux';
import { adminLogin, adminLogOut } from '../../../actions/adminActions';
import AdminLogged from './AdminLogged';
import { Container, Header, LoginContainer } from './AdminLoginCSS';

const AdminLogin = ({adminLogin, adminLogOut, admin: {isAuthenticated}}) => {


  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(user);
    adminLogin({
      email: user.email,
      password: user.password
    });
  }

  const logout = () => {
    adminLogOut();
  }

  if(!isAuthenticated){
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
      <AdminLogged logout={logout} />
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {adminLogin, adminLogOut})(AdminLogin)
