import styled from 'styled-components';
import { Wrapper } from '../../layout/ReusableComponents/StyledComponents';


export const Container = styled(Wrapper)`
  width: 100%;
  background: lightgrey;
  position: fixed;
  top: 60px; left: 0; bottom: 0; right: 0;
  padding: 0; margin: 0;
  font-family: 'Lato', sans-serif;
  @media(max-width:768px){
    top: 50px;
  }
`;
export const Header = styled.h1`
  margin-top: 100px;
  text-align: center;
`;
export const LoginContainer = styled.div`
  h3{ text-align: center;}
  border: 1px solid grey;
  width: 300px;
  height: auto; 
  margin: 0 auto; padding: 10px;
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);

  background: lightgrey;
  @media(max-width:768px){
    width: 85%;
  }
  form{
    input{
      border: 1px solid grey;
      width: 100%;
      padding: 7.5px;
      margin: 2.5px auto;
      display: block;
      &[type="submit"]{
        margin-top: 10px;
        border: 0;
        background: lightblue;
        cursor: pointer;
        &:hover{
          background: blue;
          color: white;
        }
      }
    }
  }
  &::before,
  &::after{
    content: '';
    display: block;
    position: absolute;
    bottom: -10px; right: -10px;
    background: black;
    width: 100%; height: 10px;
    z-index: -1;
  }
  &::after{
    width: 10px; height: 100%;
  }
`;