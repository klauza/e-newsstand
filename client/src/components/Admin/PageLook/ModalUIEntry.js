import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';


const GridPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 500, 
    staggerChildren: 50
  },
  closed: {     
    opacity: 0,
    staggerChildren: 50,
    staggerDirection: -1
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
`;

const ModalUIEntry = ({sections, sectionHandleClick, setIsOpen, isOpen}) => {

  React.useEffect(()=>{
    setIsOpen(true);
  //eslint-disable-next-line
  }, [])

  return (
    <Grid pose={isOpen ? 'open' : 'closed'}>
      {sections.map((section,id)=>
        <Section backgroundImg={section.img} key={id} >
          <span>{section.name}</span>
          <button onClick={()=>sectionHandleClick(section)}>Edit</button>
        </Section>
      )}
    </Grid>
  )
}

export default ModalUIEntry
