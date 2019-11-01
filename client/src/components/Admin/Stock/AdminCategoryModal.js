import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import EditItemModal from './EditItemModal';

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

    &>button{
      border: 1px solid black; border-radius: 3px;
      padding: 5px;
      display: inline-block;
      width: 120px; height: 30px;
      background: lightskyblue;
      cursor: pointer;
    }
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
    button:nth-of-type(1){
      font-size: 1.5em;
      grid-area: btn1;
      border: 0;
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

const CloseButton = posed.button({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

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
const AddItem = styled.button`

`;

const AdminCategoryModal = ({modal, setModalOpen}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [editModalContent, setEditModalContent] = React.useState(null);

  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  // fetch all items from this category

  const tempDB = [
    {
      id: 0,
      name: 'item-1',
      price: 2.99,
      inStock: 10
    },
    {
      id: 1,
      name: 'item-2',
      price: 4.99,
      inStock: 5
    },
    {
      id: 2,
      name: 'item-3',
      price: 7.99,
      inStock: 25
    }
  ]

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setModalOpen(false);
    }, 500)
  }

  const openEditModal = (item) => {
    setEditModalContent(item);
    setEditModalOpen(true);
  }

  return (


    <Main pose={isOpen ? "open" : "closed"}>
      {editModalOpen && <EditItemModal editModalContent={editModalContent} setEditModalOpen={setEditModalOpen} />}
      <Content pose={isOpen ? "open" : "closed"}>

        <Header>Category: {modal.name}</Header>
        <div className="top-buttons">
          <CloseButton onClick={closeModal}>Cancel<i className="fa fa-times"></i></CloseButton>
          <CloseButton onClick={closeModal}>Apply changes<i className="fa fa-check"></i></CloseButton>
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
            <Item key={id}>
              <button onClick={()=>openEditModal(item)}><i className="fa fa-cog"></i></button>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.inStock}</div>
              <button>Delete</button>
            </Item>
          )}
        <AddItem>Add new item</AddItem>
        </ItemList>

        
      </Content>
    </Main>
  )
}

export default AdminCategoryModal
