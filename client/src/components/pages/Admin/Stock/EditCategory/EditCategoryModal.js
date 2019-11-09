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
  position: fixed;
  top: 0px; left: 0px;
  right: 0px;
  bottom: 0px;
  background: lightgrey;
  color: white;
  z-index: 100;
  height: 100%;
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

  .top-buttons{
    width: auto;
    margin: 0 auto 20px;
  }

  ul{
    width: 90%;
    margin: 0 auto;
  }
  li{
    display: grid; 
    grid-template-columns: 50px 100px 100px 100px auto 150px; 
    grid-template-areas: "btn1 div1 div2 div3 . btn2";
    border: 1px solid white;
    div:nth-of-type(1){
      grid-area: div1;
    }
    div:nth-of-type(2){
      grid-area: div2;
    }
    div:nth-of-type(3){
      grid-area: div3;
    }
    
    div{
      padding: 5px;
      border-right: 1px solid lightgrey;
    }
    button{cursor: pointer;}
    button:nth-of-type(1){
      font-size: 1.25em;
      grid-area: btn1;
      border: 0; outline: 0;
      transform-origin: 50% 50%;
      @keyframes start-spin{
        100%{
          transform: rotate(180deg);
        }
      }
    }
      
    button:nth-of-type(2){
      grid-area: btn2;
      border: 0;
    }
  }
`;
const HeaderPosed = posed.h2({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
const Header = styled(HeaderPosed)`
  line-height: 30px;
  text-align: center;
  margin: 20px 0;
`;







const ItemList = posed.ul({
  initialPose: 'closed',
  open: {
    opacity: 1,
    delayChildren: 750, 
    staggerChildren: 50
  },
  closed: {     
    opacity: 0
  }
});
const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})


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

      <Content pose={isOpen ? "open" : "closed"}>

        <Header>Category: {storedCategory.name}</Header>

        <div className="top-buttons">
          <UIBtnPosed exit innerText="Cancel" fontIcon="fa fa-times" onClick={closeModal} />
          <UIBtnPosed success innerText="Apply changes" fontIcon="fa fa-check" onClick={closeModal} />
        </div>

        <ItemList pose={isOpen ? "open" : "closed"}>

          <Item>
            <button></button>
            <div>name</div>
            <div>price</div>
            <div>inStock</div>
            <button></button>
          </Item>

          {tempDB.map((item,id) =>
            <Item key={id} >
              <button id={`btn-${id}`} onClick={(e)=>openEditModal(e, item)}><i className="fa fa-cog"></i></button>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.inStock}</div>
              <button>Delete</button>
            </Item>
          )}

        <UIBtnPosed blue innerText="Add new item" fontIcon="fa fa-plus-circle" onClick={openCreateItemModal} style={{marginTop: "15px"}} />

        </ItemList>

        
      </Content>
    </Main>
  )
}

export default EditCategoryModal
