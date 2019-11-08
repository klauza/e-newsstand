import React from 'react';
import styled from 'styled-components';
import SvgSpinner from '../../../Icons/Spinner';

const LoaderWrapper = styled.div`
  width: 200px; height: 200px;
  margin: 50px auto;

  svg{
    display: block;
    margin: 0 auto;
    animation: svg-animation infinite 750ms linear;

    @keyframes svg-animation{
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <SvgSpinner />
    </LoaderWrapper>
  )
}

export default Loader
