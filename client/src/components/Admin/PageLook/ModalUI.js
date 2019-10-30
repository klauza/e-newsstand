import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

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


const GridPosed = posed.div({
  open: {
    delayChildren: 500, 
    staggerChildren: 50
  }
})
const Grid = styled(GridPosed)`
  width: 200px;
  margin: 25px auto;
  display: flex; flex-direction: column;
`;

const SectionPose = posed.section({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
const Section = styled(SectionPose)`
  background-image: url(${props => props.backgroundImg});
  display: grid; 
  align-content: space-between; justify-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: relative;
  span{
    font-size: 0.9em;
  }
  button{
    cursor: pointer;
    padding: 2.5px;
  }
  &:hover{
    cursor: default;
    background-color: rgba(255,255,255,0.25);
  }

/* 
  &.active {
    background: grey;
  } */
`;


const ModalUI = (props) => {
  const [closeModal, setCloseModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const render = [];

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const exitModal = () => {
    setCloseModal(true);
    setTimeout(()=>{
      props.setShowModal(null)
    }, 500)
  }

  const sectionHandleClick = (e) => {
    // set active section
    // Array.from(e.target.parentNode.children).forEach(sec => sec.classList.remove('active'));
    // e.target.classList.add('active');

    // next
  }

  return (
    <ModalContainer closeModal={closeModal}>
      <button onClick={exitModal}>Close</button>
      <button onClick={exitModal}>Confirm changes</button>
      <Header>Choose section for {props.modal.name} </Header>

      <Grid pose={isOpen ? 'open' : 'closed'}>
      
        {props.modal.sections.map((section,id)=>
          <Section backgroundImg={section.img} key={id} onClick={(e)=>sectionHandleClick(e)}>
            <span>{section.name}</span>
            <button>Edit</button>
          </Section>
        )}
      </Grid>


    </ModalContainer>
  )
}

export default ModalUI
