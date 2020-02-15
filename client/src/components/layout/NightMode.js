import React, {useState} from 'react';
import posed from 'react-pose';
import styled from 'styled-components';


const config = posed.div({
  idle: {scale: 1},
  hovered: {scale: 1.5},
  draggable: 'y',
  dragBounds: { top: -50, bottom: 200 },
  dragEnd: { 
    y: ({ isNight }) => isNight ? 100 : 0,
    transition: {type: 'spring'}
  } 
})

const Wrapper = styled(config)`
  position: fixed; top: 50px; right: 25px;
  z-index: 899;
  background: red;
  width: 25px; height: 25px;
  cursor: pointer;
`;

const NightMode = () => {
  const [hovering, setHovering] = useState(false);
  const [night, setNight] = useState(false);

  const handleStop = (y) => {
    // console.log(y);
    // console.log(night);

    if(y >= 100 && !night){
      setNight(true);
    } else if(y <= 0){
      setNight(false);
    }
    
  } 

  return (
    <Wrapper 
      pose={hovering ? 'hovered' : 'idle'}
      isNight={night}
      onMouseLeave={()=>setHovering(false)}
      onValueChange={{ y: y => handleStop(y) }}
    >
      
    </Wrapper>
  )
}

export default NightMode;