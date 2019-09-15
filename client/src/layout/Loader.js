import React from 'react';
import loadingImg from '../media/smallloader.gif';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 200px; height: 200px;
  margin: 50px auto;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={loadingImg} alt=""/>
    </LoaderWrapper>
  )
}

export default Loader
