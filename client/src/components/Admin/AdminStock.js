import React, {useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../layout/StyledComponents';
import AdminCategory from './AdminCategory';

const Header = styled.h2`
  text-align: center;
`;
const StockButton = styled.button`
  width: auto;
  margin: 0 auto;
`;
const Category = styled.li`
  height: 50px;
  display: grid; 
  grid-template-columns: auto 50px 50px;
  border: 1px solid black;
  div{
    line-height: 50px;
  }
  .category-name{
    background: orange;
    &:hover{
      cursor: pointer;
      background: whitesmoke;
    }
  }
  .category-edit{
    background: greenyellow;
    text-align: center;
  }
  .category-delete{
    background: red;
    text-align: center;
  }
`;

const AdminStock = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (id) => {

    setModalIndex(id);
    setIsOpen(true);
  }

  const temporaryArray = [
    {
      name: "Gadgets",
      id: 0
    },
    {
      name: "Newspapers",
      id: 1
    },
    {
      name: "Letters",
      id: 2
    }
  ]

  return (
    <Wrapper>
      <Header>Stock list</Header>

      <ul>
        <li>Choose category [edit, delete-cant delete if there are items inside]</li>
        <li>Empty</li>

        {temporaryArray.map( (cat,id) =>
          <Category key={id}>
            <div className="category-name" onClick={()=>openModal(cat.id)}>{cat.name}</div>
            <div className="category-edit"><i className="fa fa-pencil-square"></i></div>
            <div className="category-delete"><i className="fa fa-times"></i></div>
          </Category>
        )}


      </ul>

      {isOpen ? (<AdminCategory setIsOpen={setIsOpen} modal={modalIndex} />) : (null)}

      <StockButton>Add new category</StockButton>
    </Wrapper>
  )
}

export default AdminStock
