import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from './Loader';

const UpdateScreen = styled.div`
  opacity: 1;
  z-index: 999;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,.4);
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  ${props => props.animate ? "animation: fade 1500ms forwards" : "null"};
  @keyframes fade {
    0%{
      opacity: 1;
    }
    35%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  h1{
    color: #fff;
  }
`;

const UpdatingScreen = ({admin: {loading, isUpdating, isFadingOut}}) => {

  return (
    <>
    {(isUpdating || isFadingOut) && 
      <UpdateScreen animate={isFadingOut} updating={isUpdating}>
          <h1>I AM UPDATING</h1>
          <Loader />
      </UpdateScreen>
    }
    </>
  )
}

const mapStateToProps = state => ({
  admin: state.admin
})
export default connect(mapStateToProps, {})(UpdatingScreen);