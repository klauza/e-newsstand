import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { adminLogin, adminLogOut } from '../../actions/adminActions';

import AdminLogged from './AdminLogged';
import styled from 'styled-components';
import { Wrapper } from '../../layout/StyledComponents';

const Container = styled(Wrapper)`
  width: 100%;
  background: lightgrey;
  position: fixed;
  top: 60px; left: 0; bottom: 0; right: 0;
  padding: 0; margin: 0;
  @media(max-width:768px){
    top: 50px;
  }
`;
const Header = styled.h1`
  text-align: center;
`;
const LoginContainer = styled.div`
  h3{ text-align: center;}
  width: auto; max-width: 400px; height: auto; 
  margin: 0 auto; padding: 0 5px;
  border: 1px solid black;
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  form{
    input{
      margin: 0 auto;
      display: block;
    }
  }
`;
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
            <input ref={loginRef} type="text"
              placeholder="login"
            />
            <input ref={pwdRef} type="password"
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
