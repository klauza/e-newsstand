import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

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
  background: rgba(0,0,0,.35);
  color: white;
  z-index: 100;
  height: 100%;
  display: grid; place-items: center;
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
  h3{
    text-align: center;
    color: black;
    margin-top: 10px;
    font-family: sans-serif;
  }

  .category-form{
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    &__input{
      margin: 20px 0;
      display: grid; grid-template-columns: 1fr 1fr;
      font-family: sans-serif;
    
      label{
        display: grid; justify-self: right; 
        color: black;
        margin-right: 5px;
        padding: 2.5px;
      }
      input, select{
        display: grid; justify-self: left; 
        margin-left: 5px;
        padding: 2.5px;
      }
    }

    @media(max-width: 768px){
      width: 100%;
      &__input{

        label, input, select{
          margin: 0 auto;
          display: block;
          width: 90%;
        }
      }
    }
  }


  position: relative;
  width: 80vw;
  height: 50vh;
  background: white;
  border: 1px solid black;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,.4);
  .buttons{
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex; flex-direction: row;
    justify-content: space-between;
    button{
      width: 120px; height: 40px;
      border: 0;
      background: lightseagreen;
      cursor: pointer;
      font-family: sans-serif;
      &:hover{
        background: green;
      }
    }
  }
`;

const CreateCategoryModal = ({setOpenCatCreator}) => {

  const name = React.useRef();
  const type = React.useRef();

  const [catName, setCatName] = React.useState(null);
  const [catType, setCatType] = React.useState("clothes");

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setOpenCatCreator(false);
    }, 500)
  }

  const submitForm = () => {
    console.log('Form submitted: ',catName, catType);
  }


  return (
    <Main pose={isOpen ? "open" : "closed"}>
      <Content>
        <h3>Create new category</h3>

        <div className="category-form">

          <div className="category-form__input">
            <label htmlFor="">Category Name:</label>
            <input 
              type="text" 
              ref={name}
              onChange={(e)=>setCatName(e.target.value)}
            />
          </div>
          
          <div className="category-form__input">
            <label htmlFor="">Category Type:</label>
            <select onChange={(e)=>setCatType(e.target.value)} ref={type}>
              <option value="clothes" defaultValue>clothes</option>
              <option value="gadgets">gadgets</option>
            </select>
          </div>

        </div>
        <div className="buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={submitForm}>Create</button>
        </div>
      </Content>

    </Main>
  )
}

export default CreateCategoryModal
