import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const MainPosed = posed.div({
  initialPose: 'closed',
  editopen: {
    opacity: 1,
    transition: { duration: 500 }
  },
  editclosed: {     
    opacity: 0,
    transition: { duration: 500 }
  }
})
const Main = styled(MainPosed)`
  z-index: 110;
  position: fixed;
  height: 100%; width: 100%;
  top: 0px; left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,0.25);
`;
const Container = styled.div`
  width: 90%;
  margin: 120px auto 0;
`;
const Content = styled.div`
  /* h2 height + buttons height */
  width: 90%;
  margin: 0 auto;
  display: grid; grid-template-columns: 50px auto;

`;

const DataPosed = posed.div({
  initialPose: 'closed',
  editopen: {
    x: '0',
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 600, damping: 30 },
      default: { duration: 500 }
    }
  },
  editclosed: { 
    x: '100%',    
    opacity: 0,
    transition: { duration: 500 }
  }
});
const Data = styled(DataPosed)`
  border: 2px solid red;
  background: lightblue;
  color: #000;
`;

const EditItemModal = ({editModalContent, setEditModalOpen}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const closeEditModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setEditModalOpen(false)
    }, 500)
  }

  return (
    <Main pose={isOpen ? "editopen" : "editclosed"}>
      <Container>
        <Content>
          <div></div>

          <Data pose={isOpen ? "editopen" : "editclosed"}>
            <button onClick={closeEditModal}>Confirm changes</button>
            <button onClick={closeEditModal}>Cancel changes</button>
            <div>Item name: {editModalContent.name}</div>
            <div>Item price: {editModalContent.price}</div>
          </Data>

        </Content>
      </Container>
    </Main>
  )
}

export default EditItemModal
