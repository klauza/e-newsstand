import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { adminLogin, adminLogOut } from '../../actions/adminActions';

import AdminLogged from './AdminLogged';
import styled from 'styled-components';
import { Wrapper } from '../../layout/StyledComponents';

const Header = styled.h1`
  text-align: center;
`;
const LoginContainer = styled.div`
  width: auto; max-width: 400px; height: auto; 
  margin: 0 auto; padding: 0 5px;
  border: 1px solid black;
  
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
      <Wrapper>
        <Header>Admin panel</Header>

        <LoginContainer>
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

      </Wrapper>
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
