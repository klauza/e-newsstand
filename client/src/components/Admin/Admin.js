import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { adminLogin, adminLogOut } from '../../actions/adminActions';
import AdminLogged from './AdminLogged';
import { Container, Header, LoginContainer } from './AdminCSS';

const Admin = ({adminLogin, adminLogOut, admin: {isAuthenticated}}) => {

  const loginRef = useRef();
  const pwdRef = useRef();

  const login = (e) => {
    e.preventDefault();
    let loginVal = loginRef.current.value;
    let pwdVal = pwdRef.current.value;

    adminLogin({
      login: loginVal,
      password: pwdVal
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
          <form onSubmit={login}>
            <input 
              value="login"
              ref={loginRef} 
              type="text" 
              placeholder="login"
            />
            <input 
              value="password"
              ref={pwdRef} 
              type="password"
              placeholder="password"
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
export default connect(mapStateToProps, {adminLogin, adminLogOut})(Admin)
