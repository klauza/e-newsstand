import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../layout/ReusableComponents/StyledComponents';

const Header = styled.h2`
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 15px;
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

const AdminChangelog = () => {

  const exampleVersioning = [
    {
      version: "1.0",
      desc: ["Added new way to list items in /shop", "Optimized loading images, now it takes less time to load them", "Created an address tab in /contact"]
    }
  ]
  return (
    <Wrapper>
      <Header> Changelog </Header>
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
}

export default AdminChangelog