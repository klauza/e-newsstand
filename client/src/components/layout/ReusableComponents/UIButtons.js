import React, {forwardRef} from 'react';
import styled from 'styled-components';

const UIBtn1 = styled.button`
  display: block;
  border: 0; outline: none; border-radius: 2px;
  padding: 10px 15px;
  box-shadow: 0 3px 3px -1px rgba(0,0,0,.4);
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 125ms ease;
  
  /* styles from props */
  color: ${props => 
    props.exit ? "#fff" :
    props.success ? "#fff" :
    props.blue ? "#fff" :
    props.info ? "#000" : "#000"
  };
  background-color: ${props =>
    props.exit ? "#f12e45" :
    props.success ? "#32b34a" :
    props.blue ? "#14A0E8" :
    props.info ? "#ccd221" : "white"
  };

  /* fontIcon */
  i{
    margin-left: 5px;
  }

  /* hover */
  &:hover{
    background-color: ${props =>
      props.exit ? "#ff6363" :
      props.success ? "#1f9935" :
      props.blue ? "#128bc9" :
      props.info ? "#dde32b" : "white"
    };
  }
  &:active{
    transition: box-shadow 125ms ease;
    box-shadow: 0 3px 12px -1px rgba(0,0,0,.7);
  }
  
`;

/* +++++ UIBtn1 +++++ */
export const UIBtn = forwardRef((props, ref) => {
  return(
    <UIBtn1 ref={ref} {...props} >
      {props.innerText} 
      {props.fontIcon && <i className={props.fontIcon}></i>}
    </UIBtn1>
  )
})