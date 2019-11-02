import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ContentPosed = posed.div({
  initialPose: 'closed',
  isopen: {
    rotateX: 0,
    opacity: 1,
    transition: {
      rotateX: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 1500 }
    }
  },
  isclosed: { 
    rotateX: -90,    
    opacity: 0,
    transition: { duration: 1500 }
  }
});
const Content = styled(ContentPosed)`

  z-index: 111;
  transform-origin: center top;
  border: 1px solid black;
  background: whitesmoke;
  width: 60%;
  height: 50vh;
  /* margin: 0 auto; */
  h1{
    color: black;
  }
`;



const CreateItemContent = ({closeModal, modalNumero, nextModal, prevModal}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  
  return (
    <Content pose={isOpen ? "isopen" : "isclosed"} >
      <h1>modal nr. {modalNumero} </h1>
      <button onClick={closeModal}>Close</button>
      {modalNumero <= 2 && <button onClick={nextModal}>Next</button> }
      {modalNumero > 1 && <button onClick={prevModal}>Previous</button>}
    </Content>
  )
}

export default CreateItemContent
