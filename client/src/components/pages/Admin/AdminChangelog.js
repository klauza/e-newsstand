import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAdmin } from '../../../actions/adminActions';

import styled from 'styled-components';
import { Wrapper } from '../../layout/ReusableComponents/StyledComponents';

const Header = styled.h2`
  text-align: center;
  font-family: sans-serif;
`;
const Clock = styled.div`
  .digitalClock{
    display: block;
    margin: 15px auto;
    width: 150px;
    background: #f3f2f2;
    font-family: cursive;
    padding: 0 6px;
    box-shadow: inset 0 0 2px 2px #000001;
    border-radius: 2px;
    text-align: center;
  }
`;
const UList = styled.ul`
 
  width: 100%; 
  &>li{ 
    padding: 5px;
    display: grid; grid-template-columns: 1fr 4fr;
  }
  .list-head{
    background: black;
    color: white;
  }
  &>li:not(:first-of-type){
    border-bottom: 1px solid grey;
  }
  li > ul {
    list-style-position: outside;
  }

`;

const AdminChangelog = ({loadAdmin, admin: {loading, token, isAuthenticated}}) => {
  const [time, setTime] = useState(new Date());
  const [displayTime, setDisplayTime] = useState(time.toLocaleTimeString());





  useEffect(()=>{
    if(token && !isAuthenticated) loadAdmin(); 

    var handle = setInterval(() => {
      setTime(new Date());
      setDisplayTime(time.toLocaleTimeString());

    }, 1000);

    return () => {
      clearInterval(handle);
    };
  // eslint-disable-next-line
  },[time])


  const exampleVersioning = [
    {
      version: "1.0",
      desc: ["Added new way to list items in /shop", "Optimized loading images, now it takes less time to load them", "Created an address tab in /contact"]
    }
  ]


  if(!loading && isAuthenticated){
  return (
    <Wrapper>
      <Header> Changelog </Header>
      <div style={{textAlign: "center", margin: "15px 0", fontFamily: "sans-serif"}}>
        
    
        <Clock>
          <div className="digitalClock">{displayTime}</div>
        </Clock>

        <p>While this time is running, I'm building new features for this application</p>
        <p>If you'd like to see what's going on under the hood, please visit: <a style={{fontWeight: "900"}} rel="noopener noreferrer" target="_blank" href="https://github.com/klauza/e-newsstand">this page</a></p>
      </div>

      <UList>
        <li className="list-head">
          <div>Version</div>
          <div>Description</div>
        </li>

        {exampleVersioning.map((log, id) => 
          <li key={id}>
            <div><strong>{log.version}</strong></div>
            <ul>{log.desc.map((dsc, id2) => <li key={id2}>{dsc}</li>)}</ul>
          </li>
        )}

      </UList>
    </Wrapper>
  )
} else {
  if(token){
    return(<div>Authenticating...</div>) 
  } else{
    return <Redirect to="/" exact /> // redirect if authentication failed
  }
}
}

const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {loadAdmin})(AdminChangelog)