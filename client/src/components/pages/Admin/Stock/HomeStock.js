import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAdmin } from '../../../../actions/adminActions';

import styled from 'styled-components';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';
import { UIBtn } from '../../../layout/ReusableComponents/UIButtons';
import CreateCategoryModal from './CreateNewCategory/CreateCategoryModal';  // create new category
import EditCategoryModal from './EditCategory/EditCategoryModal';   // edit category

const Header = styled.h2`
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 15px;
`;

const CategoriesContainer = styled.ul`
  padding: 2.5px;
  width: 100%;
  &>li:nth-child(1){
    box-shadow: unset;
  }
`;
const Category = styled.li`

  height: 50px;
  line-height: 50px;
  display: grid; 
  grid-template-columns: 120px 1fr 50px;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 3px -1px rgba(0,0,0,.5);
  /* border: 1px solid lightgrey; */
  margin: 5px 0;
  
  .category-manage-items{
    border: 1px solid #000; 
    outline: 0;
    height: 100%; width: 100%;
    background: #14A0E8; color: white;
    transition: background-color 200ms ease;
    cursor: pointer;
    i{
      color: #000;
      font-size: 1.5em;
      transition: transform 150ms ease, color 200ms ease;
    }
    &:hover{
      background: #128bc9;
      transition: background-color 200ms ease;
      i{
        color: white;
        transform: rotate(60deg);
        transition: transform 150ms ease, color 200ms ease;
      }
    }
  }

  .category-name {
    padding-left: 5px;
    color: white;
    background: black;
    font-family: sans-serif;
    text-transform: uppercase;
    i{
      color: white;
      margin-left: 10px;
      font-size: 1.25em;
      cursor: pointer;
      position: relative;
      &::after{
        content: 'Edit name';
        text-transform: capitalize;
        font-family: sans-serif;
        font-size: 0.85em;
        position: absolute; top: 0; right: -125px;
        color: #000; background: #fff; 
        border: 1px solid lightgrey; border-radius: 3px;
        width: 120px; height: 25px; line-height: 25px;
        pointer-events: none;
        transform: translateY(15px);
        opacity: 0;
        transition: transform 200ms ease, opacity 200ms ease;
      }
      &:hover{
        &::after{
          transform: translateY(0); opacity: 1;
          transition: all 200ms ease;
          @media(max-width: 768px){
            display: none;
          }
        }
      }
    }
  }
  .category-delete{
    background: red;
    text-align: center;
    margin-left: -20px;
    width: 40px; height: 40px;
    font-size: 1.5em;
    color: white;
    border: 1px solid white;
    outline: 0;
    cursor: pointer;
    box-shadow: 0 0px 6px -1px rgba(0,0,0,.75);

    &:hover{
      box-shadow: 0 0px 10px 0px rgba(0,0,0,.75);
    }
  }
`;


const HomeStock = ({loadAdmin, admin: { token, loading, isAuthenticated}}) => {

  const [storedCategory, setStoredCategory] = useState(null);  // store certain category
  const [openCatEditor, setOpenCatEditor] = useState(false);   // cat EDITOR
  const [openCatCreator, setOpenCatCreator] = useState(false); // cat CREATOR

  useEffect(()=>{
    if(token && !isAuthenticated) loadAdmin();
  // eslint-disable-next-line
  }, []);

  // open editor
  const openModal = (category) => {
    setStoredCategory(category);
    setOpenCatEditor(true);
  }

  // open creator
  const openCategoryCreator = () => {
    setOpenCatCreator(true);
  }

  // temp data
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

  // edit category name
  const editCategoryName = (catObj) => {
    alert(`editing ${catObj.name}`);
  }

  // delete category
  const deleteCat = (catObj) => {
    if (window.confirm(`Are you sure you want to delete "${catObj.name}" category?`)) {
      // 1. delete from DB
      // 2. setAlert("Reservation cancelled!", "yellow", 1750);
      // 3. rerender 
      console.log('deleted');
    } 
  }
  if(!loading && isAuthenticated){
  return (
    <Wrapper>
      <Header>Your list of shop categories</Header>

      <CategoriesContainer>

        <Category>
          <div>Manage items</div>
          <div>Category name</div>
          <></>
        </Category>

        {temporaryArray.map( (cat,id) =>
          <Category key={id}>
            <button className="category-manage-items" onClick={()=>openModal(cat)}><i className="fa fa-wrench"></i></button>
            <div className="category-name">{cat.name} <i className="fa fa-pencil-square" onClick={()=>editCategoryName(cat)}></i></div>
            
            <button className="category-delete" onClick={()=>deleteCat(cat)}><i className="fa fa-times"></i></button>
          </Category>
        )}

      </CategoriesContainer>

      {/* create new category */}
      { openCatCreator && ( <CreateCategoryModal setOpenCatCreator={setOpenCatCreator}/>) }

      {/* edit category */}
      { openCatEditor && (<EditCategoryModal setOpenCatEditor={setOpenCatEditor} storedCategory={storedCategory} />) }

      <UIBtn blue innerText="Add new category" fontIcon="fa fa-plus-circle" onClick={openCategoryCreator} style={{margin: "25px auto"}} />
    </Wrapper>
  )
} else {
  if(token){
    return(<div>Authenticating...</div>) 
  } else{
    return <Redirect to="/" exact /> // redirect if authentication failed
  }
}
}

const mapStateToProps = (state) => ({
  admin: state.admin
})
export default connect(mapStateToProps, {loadAdmin})(HomeStock)
