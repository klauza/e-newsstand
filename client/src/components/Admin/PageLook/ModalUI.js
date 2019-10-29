import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%; height: 100%;
  position: fixed;
  top: 170px; left: 0; bottom: 0; right: 0;
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


const ModalUI = (props) => {

  const [closeModal, setCloseModal] = React.useState(false);

  const exitModal = () => {
    setCloseModal(true);

    setTimeout(()=>{
      props.setShowModal(null)
    }, 500)
  }
  return (
    <ModalContainer closeModal={closeModal}>
      modal {props.id}
      <button onClick={exitModal}>
        Close
      </button>
    </ModalContainer>
  )
}

export default ModalUI
