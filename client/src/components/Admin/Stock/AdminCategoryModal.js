import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  top: 0px; left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,0.5);
  color: white;
  z-index: 100;
`;
const Content = styled.div`
  display: grid; 
  align-self: center;
  width: 90vw;
  margin: auto;
  background: black;
`;

const AdminCategoryModal = ({modal, setIsOpen}) => {
  return (
    <Main>
      <Content>
        MODAL {modal}
        Close modal <button onClick={()=>setIsOpen(false)}>X</button>
      </Content>
    </Main>
  )
}

export default AdminCategoryModal
