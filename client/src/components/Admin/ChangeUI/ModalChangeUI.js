import React, {useState} from 'react';
import styled from 'styled-components';
import ModalUISelection from './ModalUISelection';
import ModalUISelected from './ModalUISelected';

const ModalContainer = styled.div`
  box-shadow: 0 -3px 4px -1px rgba(0,0,0,0.35); 
  width: 100%; height: 100%;
  position: fixed;
  top: 17.5%; left: 0; bottom: 0; right: 0;
  background: lightgrey;
  z-index: 100;
  transform: translateY(100%);
  animation: open-modal forwards 500ms ease;
  ${props => props.closeModal ? (
    `animation: close-modal forwards 500ms ease;`
  ) : (null)}

  @keyframes open-modal{
    0%{
      transform: translateY(100%);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes close-modal{
    0%{
      transform: translateY(0);
      opacity: 1;
    }
    100%{
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
const Header = styled.h2`
display: inline-block;
  text-align: center;
`;
// ----------------------------------


// ------------------------------







const ModalChangeUI = (props) => {
  const [closeModal, setCloseModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectSection, setSelectSection] = useState(null);

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const exitModal = () => {
    setCloseModal(true);
    setTimeout(()=>{
      props.setShowModal(null)
    }, 500)
  }

  const sectionHandleClick = (section) => {

    setIsOpen(false);
    setTimeout(()=>{
      setSelectSection(section);
    }, 500)
  }

  const returnToAllSections = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setSelectSection(null);
    }, 500)
  }

  return (
    <ModalContainer closeModal={closeModal}>
      <button onClick={exitModal}>Close</button>
      <button onClick={exitModal}>Confirm changes</button>
      <Header>Choose section for {props.modal.name} </Header>

      {/* First modal, opens up which page you'd like to change */}
      {selectSection === null &&
        <ModalUISelection setIsOpen={setIsOpen} isOpen={isOpen} sectionHandleClick={sectionHandleClick} sections={props.modal.sections} />
      }


      {/* Second modal, opens up set of available changes */}
      {(selectSection !== null) && (
        <ModalUISelected setIsOpen={setIsOpen} isOpen={isOpen} selectSection={selectSection} returnToAllSections={returnToAllSections} />
      )}


    </ModalContainer>
  )
}

export default ModalChangeUI
