import styled from 'styled-components';
import posed from 'react-pose';

// MAIN [background-overlay]
const MainPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {  
    opacity: 0
  }
})
export const Main = styled(MainPosed)`
  z-index: 100;
  position: fixed;
  top: 0px; bottom: 0px; left: 0px; right: 0px;
  display: grid; place-items: center;
  background: rgba(0,0,0,.35); 
  color: white;
`;

// CONTENT [modal]
const ContentPosed = posed.div({
  initialPose: 'closed',
  open: {
    y: 0,
    opacity: 1,
    delayChildren: 500, 
    staggerChildren: 50
  },
  closed: {     
    y: 400,
    opacity: 0 
  }
})
export const Content = styled(ContentPosed)`
  position: relative;
  width: 80vw; height: 50vh;
  background: white;
  border: 1px solid black; border-radius: 2px;
  box-shadow: 0 2px 17px -2px rgba(0,0,0,.8);
  font-family: sans-serif;
  h3{
    margin-top: 10px;
    text-align: center;
    color: black;
  }

  .category-form{
    display: flex; flex-direction: column;
    width: 75%; height: 75%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    &__input{
      margin: 20px 0;
      display: grid; grid-template-columns: 1fr 1fr;
      font-family: sans-serif;
    
      label{
        display: grid; justify-self: right; 
        color: black;
        margin-right: 5px;
        padding: 2.5px;
      }
      input, select{
        display: grid; justify-self: left; 
        margin-left: 5px;
        padding: 2.5px;
      }
    }

    @media(max-width: 768px){
      width: 100%;
      &__input{

        label, input, select{
          margin: 0 auto;
          display: block;
          width: 90%;
        }
      }
    }
  }

  .buttons{
    width: 100%;
    position: absolute;
    bottom: 5px;
    display: flex; flex-direction: row;
    justify-content: space-between;
    button{
      width: 100px;
      &:nth-child(1){ margin-left: 5px;}
      &:nth-child(2){ margin-right: 5px;}
    }
  }
`;