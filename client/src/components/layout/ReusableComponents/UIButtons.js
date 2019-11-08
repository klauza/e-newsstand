import React from 'react';
import styled from 'styled-components';

const UIBtn1 = styled.button`
  display: block;
  border: 0; outline: none; border-radius: 2px;
  padding: 10px 15px;
  box-shadow: 0 3px 3px -1px rgba(0,0,0,.7);
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  cursor: pointer;
  
  /* styles from props */
  color: ${props => 
    props.exit ? "#fff" :
    props.success ? "#fff" : 
    props.info ? "#000" : "#000"
  };
  background-color: ${props =>
    props.exit ? "#f12e45" :
    props.success ? "green" : 
    props.info ? "#ccd221" : "white"
  };

  /* fontIcon */
  i{
    margin-left: 5px;
  }
`;

/* +++++ UIBtn1 +++++ */
export const UIBtn = (props) => {
  return(
    <UIBtn1 {...props} >
      {props.innerText} 
      {props.fontIcon && <i className={props.fontIcon}></i>}
    </UIBtn1>
  )
}