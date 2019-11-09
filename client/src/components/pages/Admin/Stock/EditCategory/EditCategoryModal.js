import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import tempDB from './itemsTempDB';
import EditItemModal from '../EditItem/EditItemModal';
import CreateItemModal from '../CreateNewItem/CreateItemModal';

import { UIBtn } from '../../../../layout/ReusableComponents/UIButtons';

const UIBtnPosed = styled(posed(UIBtn)({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
}))`
  display: inline-block;
  margin: 0 2.5px;
`;


const MainPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
  },
  closed: {     
    opacity: 0
  }
})
const Main = styled(MainPosed)`
  z-index: 100;
  height: 100%;
  position: fixed; 
  top: 0px; left: 0px; right: 0px; bottom: 0px;
  background: rgba(219, 219, 219, 0.75);
  color: white;
`;

const ContentPosed = posed.div({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 500, 
    staggerChildren: 50
  },
  closed: {     
    opacity: 0
  }
})
const Content = styled(ContentPosed)`
  display: flex; flex-direction: column;
  align-self: flex-start; justify-content: flex-start;
  width: 90%; height: 100%;
  margin: auto;
  background: grey;
  @media(max-width: 768px){
    width: 100%;
  }
`;

// HEADER
const HeaderPosed = posed.h2({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
const Header = styled(HeaderPosed)`
  line-height: 30px;
  text-align: center;
  margin: 20px 0;
  font-family: sans-serif;
`;



// ITEM LIST
const ItemListPosed = posed.ul({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 800, 
    staggerChildren: 50
  },
  closed: {     
    opacity: 0
  }
})
const ItemList = styled(ItemListPosed)`
  width: 90%;
  margin: 0 auto;
  @media(max-width:768px){
    width: 97.5%;
  }
`;


// ITEM-POSE
const ItemPosed = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
// HEAD-ITEM - HIDDEN ON MOBILE
const HeaderItem = styled(ItemPosed)`
  display: grid; 
  grid-template-columns: 50px 100px 100px 100px 1fr 150px; 
  grid-template-areas: "a b c d . e";
  @media(max-width: 768px){ display: none; }
  
  div{
    text-align: center;
    background: #000; color: #fff;
  }
  div:nth-child(1){ grid-area: a; }
  div:nth-child(2){ grid-area: b; }
  div:nth-child(3){ grid-area: c; }
  div:nth-child(4){ grid-area: d; }
  div:nth-child(5){ grid-area: e; }
`;
// ITEM
const Item = styled(ItemPosed)`
  margin: 2.5px 0;
  border: 1px solid white;  
  display: grid; 
  grid-template-columns: 50px 100px 100px 100px auto 150px; 
  grid-auto-rows: 50px;
  grid-template-areas: "btn1 divName divPrice divStock . btn2";
  &>*{
    text-align: center;
  }
  div{
    padding: 5px;
    border-right: 1px solid lightgrey;
    span{
      @media(min-width: 769px){
        display: none;
      }
    }
  }
  .edit-item-name{
    grid-area: divName;
  }
  .edit-item-price{
    grid-area: divPrice;
  }
  .edit-item-inStock{
    grid-area: divStock;
  }

  button{
    cursor: pointer;
  }
  .edit-item-openBtn{
    font-size: 1.25em;
    grid-area: btn1;
    border: 0; outline: 0;
    transform-origin: 50% 50%;
    background: white;
    @keyframes start-spin{
      100%{
        transform: rotate(180deg);
      }
    }
  }
  .edit-item-delete{
    grid-area: btn2;
    border: 0;
  }
  /* MOBILE ITEM */
  @media(max-width: 768px){
    grid-template-columns: repeat(8, 1fr); 
    grid-template-rows: 40px 40px;
    grid-template-areas: 
    "btn1 btn1 divName divName divName divName btn2 btn2"
    "btn1 btn1 divPrice divPrice divStock divStock btn2 btn2" ;
    .edit-item-name,
    .edit-item-price,
    .edit-item-inStock{
      padding: 0;
    }
  }
`;

const EditCategoryModal = ({storedCategory, setOpenCatEditor}) => {

  const [isOpen, setIsOpen] = React.useState(false); // modal open ? "animationStart" :"null"

  const [editItemModal, setEditItemModal] = React.useState(false);  // open EDIT-item modal
  const [editItemData, setEditItemData] = React.useState(null);  // store item's data for EDIT-item modal

  const [createItemModalOpen, setCreateItemModalOpen] = React.useState(false);  // open CREATE-Item modal

  const [targetButton, setTargetButton] = React.useState(null);   // for animating gear icon of edit-btn

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  // close EditCategoryModal (this modal)
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setOpenCatEditor(false);
    }, 500)
  }

  const closeEditModal = () => {
    targetButton.style.zIndex=1;
    targetButton.querySelector('i').style.animation="none";
    // targetButton.querySelector('i').classList.remove('fa', 'fa-chevron-left');
    // targetButton.querySelector('i').classList.add('fa', 'fa-cog');
    setEditItemModal(false); // close edit-item-modal
    setEditItemData(null);  
  }

  const openEditModal = (e, item) => {

    setEditItemData(item);
    setEditItemModal(true);

    let targetBtn = e.target.closest('button');
    targetBtn.style.zIndex=111;
    targetBtn.querySelector('i').style.animation="start-spin 2000ms infinite linear";
    // targetBtn.querySelector('i').classList.remove('fa', 'fa-cog');
    // targetBtn.querySelector('i').classList.add('fa', 'fa-chevron-left');
    setTargetButton(targetBtn);
  }

  const openCreateItemModal = () => {
    setCreateItemModalOpen(true);
  }

  return (

    <Main pose={isOpen ? "open" : "closed"}>

      {editItemModal && <EditItemModal editItemData={editItemData} closeEditModal={closeEditModal} />}
      {createItemModalOpen && <CreateItemModal setCreateItemModalOpen={setCreateItemModalOpen} /> }

      <Content>

        <Header>Category: {storedCategory.name}</Header>
        <div style={{width: "auto", margin: "0 auto 20px"}}>
          <UIBtnPosed info innerText="Back" fontIcon="fa fa-arrow-up" onClick={closeModal} />
        </div>

        <ItemList>

          <HeaderItem>
            <div>Edit</div>
            <div>Name</div>
            <div>Price</div>
            <div>inStock</div>
            <div>Delete item</div>
          </HeaderItem>

          {tempDB.map((item,id) =>
            <Item key={id} >
              <button className="edit-item-openBtn" id={`btn-${id}`} onClick={(e)=>openEditModal(e, item)}><i className="fa fa-cog"></i></button>
              <div className="edit-item-name">{item.name}</div>
              <div className="edit-item-price"><span>price:</span>{item.price}</div>
              <div className="edit-item-inStock"><span>in stock:</span>{item.inStock}</div>
              <button className="edit-item-delete">Delete</button>
            </Item>
          )}

          <UIBtnPosed blue innerText="Add new item" fontIcon="fa fa-plus-circle" onClick={openCreateItemModal} style={{margin: "15px 0 0 0"}} />

        </ItemList>

      </Content>
    </Main>
  )
}

export default EditCategoryModal