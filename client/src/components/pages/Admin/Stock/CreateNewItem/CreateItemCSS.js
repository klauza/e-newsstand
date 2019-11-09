import styled from 'styled-components';
import posed from 'react-pose';
/* */
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

export const Content = styled(ContentPosed)`
padding: 10px;
z-index: 111;
transform-origin: center top;
border: 1px solid black;
background: whitesmoke;
width: 60%;
height: 50vh;
color: black;
display: flex; flex-direction: column;
position: relative;
font-family: sans-serif;
@media(max-width: 768px){
  width: 97.5%;
  height: 70vh;
}
h2{
  text-align: center;
  color: black;
}

.bottom-buttons{
  width: 100%;
  position: absolute;
  bottom: 0; left: 0;
  display: flex; flex-direction: row;
  justify-content: space-between;
  button{
    width: 120px; height: 40px;
    border: 0;
    background: lightseagreen;
    cursor: pointer;
    font-family: sans-serif;
    &:hover{
      background: green;
    }

  }
  .submit-btn{
    background: yellowgreen;
  }
}
`;

/* COLOR PICKER */
export const ColorPickerContainerCSS = styled.div`
  border: 1px solid red;
  label{
    border: 2px solid yellow;
    padding: 10px;
  }
  input[type="checkbox"]{
    position: relative;
    width: 80px;
    height: 40px;
    appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    transition: all .5s;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    cursor: pointer;
    &::after{
      content: '';
      position: absolute; top: 0; left: 0;
      width: 40px; height: 40px;
      border-radius: 50%;
      background-color: #fff;
      transform: scale(1.1) translateX(0);
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
      transition: all .5s;
    }
    &::before{
      content: 'no';
      position: absolute; top: 0; left: 100px;
      line-height: 40px;
      pointer-events: none;
    }
    &:checked{
      background: #03a9f4;
      &::after{
        transform: scale(1.1) translateX(40px);
      }
      &::before{
        content: 'yes';
      }
    }

  }
  .color-picker{
    width: 80%!IMPORTANT; 
    margin: 0 auto; display: block;
    padding: 0 20px;
    @media(max-width: 768px){
      width: 100%!IMPORTANT; 
    }
  }
`;

export const ColorPickerContent = styled.div`
  height: auto;
  margin: 10px auto;
  display: flex; flex-direction: row;
  flex-wrap: wrap;
  min-height: 40px;
`;
export const UiColors = styled.span`
  margin: 2.5px;
  width: 60px; height: 35px;
  cursor: pointer;
  background: ${props => props.color};
`;

/* IMAGES */
export const ImageContainer = styled.div`

  button{
    width: 120px; height: 40px;
    border: 0;
    background: blue;
    color: white;
    font-family: sans-serif;
    margin-top: 25px;
    cursor: pointer;
    box-shadow: 0 3px 4px -2px rgba(0,0,0,0.7);
    &:hover{
      background: green;
    }

  }
`;