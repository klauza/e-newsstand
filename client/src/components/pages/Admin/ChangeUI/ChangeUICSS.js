import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  text-align: center;

  section{
    width: 100%; margin: 0 auto;
    border-bottom: 1px solid black;
    display: grid; 
    grid-template-columns: auto auto 200px 200px;
    grid-template-areas: "change-content . name endpoint";
    /* justify-content: center; */

    span{
      border-left: 1px solid black;
      border-right: 1px solid black;
      
      padding: 10px;
      font-family: sans-serif;
      /* font-size: 2.15rem; */
      text-align: center;
      height: 100%;
      line-height: 50px;
    }
    .change-content{
      grid-area: change-content;
      width: auto;
      pointer-events: ${props => props.disableClick ? ('none') : ('auto')};
    cursor: pointer;
      &:hover{
      background: lightgrey;
    }
    }
    .name{
      grid-area: name;
    }
    .endpoint{
      grid-area: endpoint;
    }
  }
`;

export const Header = styled.h1`
  font-family: sans-serif;
  margin-bottom: 25px;
  opacity: 0.55;
`;


export const Colors = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  /* border: 1px solid grey; */


  .global-colors-header{
    background: black;
    color: white;
    padding: 15px;
  }

  .color-div-items-header{
    display: grid;
    grid-template-columns: 50px 30px 1fr 5fr;
    padding: 10px 5px;
    justify-items: left;
    &>*{
      margin-left: 10px;
    }
  }
`;

export const ColorItem = styled.div`
  display: grid;
  grid-template-columns: 50px 30px auto;
  grid-auto-rows: 50px;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 10px 5px;
  

  button{
    width: 100%;height: 100%;
    border: 1px solid white; 
    border-radius: 3px;
    background: #00ff00;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.75);
    cursor: pointer;
  }

  span{
    width: 100%;
    height: 10px;
    background: #000;
  }
  
  .global-colors-container{
    width: 100%; height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    justify-items: center;
    background: #ECEFFF;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.75);
  }
  .global-color{
    
    &__main{
      width: 80%; height: 80%;
      background: ${props => props.mainColor};
      border: 1px solid grey;
    }

    &__secondary-colors{
      border-left: 1px solid grey;
      width: 100%; height: 100%;
      display: grid; 
      grid-template-columns: repeat(${props => props.secondaryQty}, 1fr);
      align-items: center;
      justify-items: center;
    }
  }
`;
export const SecondaryColor = styled.div`
  display: block;
  width: 80%; height: 80%;
  border: 1px solid grey;
  background: ${props => props.secondaryColor};
`;