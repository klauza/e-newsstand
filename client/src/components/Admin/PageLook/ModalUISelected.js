import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;

const GridPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 500, 
    staggerChildren: 50
  },
  closed: {     
    opacity: 0
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
});
const SelectedSection = styled(SectionPose)`
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
`;


const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;




const ModalUISelected = ({selectSection, returnToAllSections, setIsOpen, isOpen}) => {

  // const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])
  return (
    <React.Fragment>

      <Title>You have chosen {selectSection.name} section</Title>
      <button onClick={returnToAllSections}>Back</button>

      <Grid pose={isOpen ? 'open' : 'closed' }>
        <SelectedSection backgroundImg={selectSection.img}>
          <span>Current layout</span>
          <div>X X X</div>
        </SelectedSection>
      </Grid>

      <ButtonsContainer>
        <button>Change layout</button>
        <button>Customize current layout</button>
      </ButtonsContainer>

    </React.Fragment>
  )
}

export default ModalUISelected

