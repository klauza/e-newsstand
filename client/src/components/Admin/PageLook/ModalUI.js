import React, {useState} from 'react';
import styled from 'styled-components';

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

const Grid = styled.div`
  width: 200px;
  margin: 25px auto;
  display: flex; flex-direction: column;
  div{
    display: grid; 
    align-items: center; justify-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid black;
    font-size: 1.75em;
    &:hover{
      cursor: pointer;
      background: white;
    }
  }
`;

const ModalUI = (props) => {

  const [closeModal, setCloseModal] = useState(false);
  const render = [];

  const renderSections = () => {
    for (let i=0; i < props.modal.sectionQty; i++){
      render.push(<div><i className="fa fa-plus-circle"></i></div>);
    }
    return render
  }

  const exitModal = () => {
    setCloseModal(true);

    setTimeout(()=>{
      props.setShowModal(null)
    }, 500)
  }
  return (
    <ModalContainer closeModal={closeModal}>
      <button onClick={exitModal}>Close</button>
      <button onClick={exitModal}>Confirm changes</button>
      <Header>Choose section for {props.modal.name} </Header>

      <Grid>
      
      {renderSections()}

      </Grid>


    </ModalContainer>
  )
}

export default ModalUI
