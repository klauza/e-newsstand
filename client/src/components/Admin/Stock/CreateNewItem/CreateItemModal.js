import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import CreateItemContent from './CreateItemContent';

const MainPosed = posed.div({
  initialPose: 'createClosed',
  createOpen: {
    opacity: 1,
    transition: { duration: 500 }
  },
  createClosed: {     
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
  display: grid; place-items: center;
  
  
  /* transform-style: preserve-3d; */
  perspective: 400;
`;


const CreateItemModal = ({setCreateItemModalOpen}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalNumero, setModalNumero] = React.useState(null);
  

  React.useEffect(()=>{
    setIsOpen(true);
    setTimeout(()=>{
      setModalNumero(1);
    }, 500)
  }, [])

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setCreateItemModalOpen(false);
    }, 500);
  }

  const nextModal = () => {
      setModalNumero(prevState => prevState + 1);
  }
  const prevModal = () => {
      setModalNumero(prevState => prevState - 1);
  }

  return (
    <Main pose={isOpen ? "createOpen" : "createClosed"}>

      <CreateItemContent closeModal={closeModal} modalNumero={modalNumero} nextModal={nextModal} prevModal={prevModal} />
    </Main>
  )
}

export default CreateItemModal
