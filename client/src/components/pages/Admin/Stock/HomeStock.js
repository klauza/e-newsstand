import React, {useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';
import CreateCategoryModal from './CreateNewCategory/CreateCategoryModal';  // create new category
import EditCategoryModal from './EditCategory/EditCategoryModal';   // edit category

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
  grid-template-columns: 1fr 1fr 50px 50px;
  border: 1px solid black;
  div{
    line-height: 50px;
  }
  .category-name{
    padding-left: 5px;
    background: orange;
    &:hover{
      cursor: pointer;
      background: whitesmoke;
    }
  }
  .category-type{
    padding-left: 5px;
    background: lightyellow;
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

const HomeStock = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [categoryModal, setCategoryModal] = useState(false);


  const openModal = (category) => {

    setModal(category);
    setModalOpen(true);
  }

  const openCategoryCreator = () => {
    setCategoryModal(true);
  }

  const temporaryArray = [
    {
      name: "Gadgets",
      type: "category type",
      id: 0
    },
    {
      name: "Newspapers",
      type: "category type",
      id: 1
    },
    {
      name: "Letters",
      type: "category type",
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
            <div className="category-name" onClick={()=>openModal(cat)}>{cat.name}</div>
            <div className="category-type">{cat.type}</div>
            <div className="category-edit"><i className="fa fa-pencil-square"></i></div>
            <div className="category-delete"><i className="fa fa-times"></i></div>
          </Category>
        )}


      </ul>
      {/* create new category */}
      { categoryModal && ( <CreateCategoryModal setCategoryModal={setCategoryModal}/>) }

      {/* edit category */}
      { modalOpen && (<EditCategoryModal setModalOpen={setModalOpen} modal={modal} />) }

      <StockButton onClick={openCategoryCreator} >Add new category</StockButton>
    </Wrapper>
  )
}

export default HomeStock
