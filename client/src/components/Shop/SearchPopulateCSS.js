import styled from 'styled-components';

export const PageWrap = styled.div`
  font-family: 'Lato', sans-serif;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 4fr;
  @media(max-width:768px){
  grid-template-columns: 1fr;
  }
`;
export const DetailedSearch = styled.div`
  margin: 20px 10px 20px 0;
  border: 1px solid red;
  min-height: 150px;
  @media(max-width: 768px){
    display: none;
    margin: 20px 0 20px 0;
  }
  .popular-items-header{
    text-align: center;
  }
  .popular-item{
    border: 1px solid black;
    margin: 5px;
    display: grid; grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px;

    &__image{
        margin: 5px;
      img{ 
        width: 100%; height: 100%; object-fit: cover;
      }
    }
    &__desc{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span{
        display: block;
        text-align: center;
      }
      button{
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

export const TopBarViewAndSort = styled.div`
  display: flex; flex-direction: row; justify-content: space-around;
  @media(max-width: 768px){ flex-direction: column; }
`;
export const DisplayView = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex; flex-direction: row;
  align-items: center;
  span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
    margin-top: -10px;
  }
  button{
    height: 100%;
    margin: 0 10px;
    border: 0;
    background: white;
    outline: 0;
    i{
      padding: 10px;
      transition: all 500ms ease-out;
      font-size: 2em;
      &:hover{
        transition: all 175ms ease;
        cursor: pointer;
        color: white;
        text-shadow: 0px 0px 5px #000000;
      }
    }
  }
`;
export const Sortings = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex; flex-direction: row;
  align-items: center;
  
  span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
    margin-top: -10px;
  }
  select{
    margin-top: -5px;
  }
`;

export const ItemsWrapper = styled.div`
  a{
    text-decoration: none;
  }
  padding: 0 5px;
  margin: 15px 0 20px;
  width: 100%;
  display: grid; 
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  justify-content: center;
  grid-auto-rows: ${props => props.view ? ("350px") : ("auto")};
  grid-template-columns: ${props => props.view ? ('repeat(auto-fill, minmax(205px, 1fr))') : ('grid-template-columns: 1fr')};

  @media(max-width: 768px){
    grid-column-gap: 5px;
    grid-row-gap: 20px;
    grid-auto-rows: ${props => props.view ? ("280px") : ("auto")};
    grid-template-columns: ${props => props.view ? ('repeat(auto-fill, minmax(165px, 1fr))') : ('grid-template-columns: 1fr')};
  }
`;

export const Item = styled.div`

  height: 100%;
  display: grid;
  grid-template-columns: ${props => props.view ? ('1fr') : ('1fr 1fr') };
  grid-template-rows: ${props => props.view ? ('40px 230px 20px 60px') : ('90px 20px 90px') }; /* 350px height */
  border: 1px solid grey;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6);
  transition: box-shadow 175ms ease, border 175ms ease;
  @media(max-width: 768px){
    grid-template-rows: ${props => props.view ? ('40px 210px 20px') : ('90px 20px 90px') }; /* 270px height */
  }
  &:hover{
    transition: all 175ms ease;
    border: 1px solid black;
    box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.7);
  }
`;
export const ItemName = styled.h4`
  /* font-size: .6em; */
  padding: 5px 0;
  text-align: center;
  color: black;
  display: grid; align-content: center;
  font-weight: 700;
  grid-column: ${props => props.view ? (null) : ("2 / 3")};
  grid-row: ${props => props.view ? (null) : ("1 / 2")};

`;
export const ItemImage = styled.div`
  width: auto; height: auto;
  display: block; margin: 0 auto; 
  padding: ${props => props.view? ("5px") : ("0")}; 
  grid-column: ${props => props.view ? (null) : ("1 / 2")};
  grid-row: ${props => props.view ? (null) : ("1 / 4")};
  overflow: hidden;
  /* border: 1px solid red; */

  img{
    display: block;
    width: 100%; height: 100%;
    object-fit: cover;
  }
`;
export const ItemPrice = styled.div`
  text-align: center;
  color: red;
  align-self: flex-end;
  grid-column: ${props => props.view ? (null) : ("2 / 3")};
  grid-row: ${props => props.view ? (null) : ("2 / 3")};
`;
export const ItemShortDesc = styled.div`
  padding: 5px 10px;
  line-height: 25px;
  align-self: center;
  text-align: center;
  color: grey;
  grid-column: ${props => props.view ? (null) : ("2 / 3")};
  grid-row: ${props => props.view ? (null) : ("3 / 4")};
  @media(max-width: 768px){
    ${props => props.view ? ("display: none") : (null)};
  }
`;