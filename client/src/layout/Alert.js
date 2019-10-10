import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
// STYLES
const AlertBox = styled.div`
  opacity: 0;
  z-index: 99;
  position: fixed;
  top: 50px; right: -250px;
  display: flex; flex-direction: row;
  align-items: center; justify-content: center;
  border: 1px solid black; border-radius: 3px;
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.75);   
  width: auto; max-width: 500px; min-width: 250px; height: auto; min-height: 100px;
  animation: animateAlert forwards ${props => props.timeout ? (props.timeout+"ms") : (null)};

  @keyframes animateAlert {
    50%{ 
      transform: translateX(-255px); 
      opacity: 1; 
    }
    85%{
      transform: translateX(-255px); 
      opacity: 1; 
    }
    100%{
      transform: translateX(-220px);
      opacity: 0;
    }
  }

    i{ font-size: 2.5rem; margin-left: 10px;}
    span{ font-size: 1rem; margin: 10px; }
    


  &.alert-warning{ background: #e06767; color: #e0e0e0; font-weight: 700; }
  &.alert-success{ background: #52b80d; color: #fff; font-weight: 700; }
  &.alert-info{ background: #d8e640; color: #000; font-weight: 700; }
  /* &.alert-red, &.alert-green, &.alert-yellow{
    

 
  } */
`;
// styles-end

const Alert = ({alerts}) => {
  // console.log(alerts);
  return (
    alerts.length > 0 && alerts.map(alert => (     
      <AlertBox timeout={alert.timeout} key={alert.id} className={`alert-${alert.type}`}>
        <i className="fa fa-exclamation-triangle"></i> 
        <span>{alert.msg}</span>
      </AlertBox>
    ))
  );
  
};

const mapStateToProps = state => ({
  alerts: state.alerts
})
export default connect(mapStateToProps)(Alert)