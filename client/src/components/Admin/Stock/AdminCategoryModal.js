import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';


const Main = styled.div`
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
  width: 90vw; height: 100%;
  margin: auto;
  background: grey;


  &>button{
    border: 1px solid black; border-radius: 3px;
    padding: 5px;
    display: block;
    width: 120px; margin: 0 auto 20px;
    background: lightskyblue;
    cursor: pointer;
  }
  ul{
    width: 75%;
    margin: 0 auto;
  }
  li{
    display: grid; 
    grid-template-columns: 100px 100px 100px auto 150px 150px; 
    grid-template-areas: "div1 div2 div3 . btn1 btn2";
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
      grid-area: btn1;
    }
    button:nth-of-type(2){
      grid-area: btn2;
    }
  }
`;
const HeaderPosed = posed.h2({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})
const Header = styled(HeaderPosed)`
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


const AdminCategoryModal = ({modal, setModalOpen}) => {

  const [isOpen, setIsOpen] = React.useState(false);

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

  console.log(isOpen);

  return (


    <Main>
      <Content pose={isOpen ? "open" : "closed"}>

        <Header>Category: {modal.name}</Header>
        <CloseButton onClick={()=>setModalOpen(false)}>Close <i className="fa fa-times"></i></CloseButton>

        <ItemList pose={isOpen ? "open" : "closed"}>
          {tempDB.map((item,id) =>
            <Item key={id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.inStock}</div>
              <button>Edit</button>
              <button>Delete</button>
            </Item>
          )}
        </ItemList>

      </Content>
    </Main>
  )
}

export default AdminCategoryModal
