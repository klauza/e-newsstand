import styled from 'styled-components';


export const Container = styled.div`
  width: 70%;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 100%; }
  margin: 0 auto;
  display: flex; flex-direction: column;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  i{
    font-size: 6em;
  }
`;

export const ItemsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-auto-rows: 200px;
  grid-row-gap: 35px;
  margin: 22px 0;
`;

// ITEM
export const Item = styled.div`
  position: relative;
  border-top: 1px solid black; 
  border-bottom: 1px solid black; 
  display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 198px;
`;
export const ItemImage = styled.div`
  width: auto; height: 100%;
  padding: 5px;
  @media(max-width: 768px){ padding: 5px; }
  img{ width: 100%; height: 100%; object-fit: cover; }
`;
export const ItemDesc = styled.div`
  border-left: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  padding: 5px;

  button{
    margin-left: 3px;
    background: white; color: black;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0px 3px -1px black;
    width: 25px; height: 25px;
    i{
      line-height: 25px;
      font-size: 1em;
    }
    &:hover{
      cursor: pointer;
      box-shadow: 0 0px 4px 0px black;
    }
    &:disabled{
      color: grey;
    }
  }
`;
export const ColorBox = styled.span`
  width: 15px; height: 15px;
  margin: 0 2.5px;
  background-color: ${props => props.color};
  display: inline-block;
  line-height: 15px;
`;
// DELETE ITEM
export const DeleteItem = styled.button`
  position: absolute;
  top: 2%; right: 5px; 
  background: red;
  width: 30px;
  height: 30px;
  box-shadow: 0 0px 3px -1px black;
  color: white;
  border: 1px solid white;
  @media(max-width: 768px){
    width: 50px;
    top: unset; bottom: -15px;
    right: 50%; transform: translateX(50%);
    box-shadow: 0 0px 3px 0px black;
  }
  &:hover{
    cursor: pointer;
    box-shadow: 0 0px 4px 0px black;
  }
`;

// PAYMENT
export const PayButton = styled.button`
  width: 100px; height: 40px; margin: 25px auto 0;
  border: 1px solid black; border-radius: 3px;
  background: rgba(45,98,110,0.9);
  color: white;
  box-shadow: 0 3px 3px -3px #000;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;

  &:hover{
    box-shadow: 0 3px 2px -2px #000;
    cursor: pointer;
  }
`;