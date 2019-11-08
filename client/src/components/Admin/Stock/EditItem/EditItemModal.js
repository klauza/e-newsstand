import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import SvgGearLampEdit from '../../../../Icons/SvgGearLampEdit';

const MainPosed = posed.div({
  initialPose: 'editclosed',
  editopen: {
    opacity: 1,
    transition: { duration: 500 }
  },
  editclosed: {     
    opacity: 0,
    transition: { duration: 500 }
  }
})
const Main = styled(MainPosed)`
  z-index: 110;
  position: fixed;
  height: 100%; width: 100%;
  top: 0px; left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,0.25);
`;
const Container = styled.div`
  width: 90%;
  margin: 120px auto 0;
`;
const Content = styled.div`
  /* h2 height + buttons height */
  width: 90%;
  margin: 0 auto;
  display: grid; grid-template-columns: 50px auto;

`;

const DataPosed = posed.div({
  initialPose: 'editclosed',
  editopen: {
    x: '0',
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 600, damping: 30 },
      default: { duration: 500 }
    }
  },
  editclosed: { 
    x: '30%',    
    opacity: 0,
    transition: { duration: 500 }
  }
});
const Data = styled(DataPosed)`
  border: 1px solid #000;
  box-shadow: 0 3px 3px -1px rgba(0,0,0,0.5);
  background: lightblue;
  color: #000;
  svg{
    width: 250px; height: 250px;
    margin: 0 auto;
    display: block;
    .animate-element{
      transform-origin: 50% 50%;
      transform-box: fill-box;
      animation: animation 2000ms infinite linear;
      @keyframes animation{
        100%{
          transform: rotate(180deg);
        }
      }
    }
  }

  .buttons{
    width: auto;
    margin: 10px auto;
    display: flex; flex-direction: row;
    justify-content: center;
    button{
      width: auto;
      margin: 5px;
    }
  }

  .input-grid{
    div{
      padding: 5px 0;
      margin: 5px;
      display: grid; grid-template-columns: minmax(auto, 200px) auto;
        
      label, input{
        line-height: 20px;
      }
      #longDescription{
        /* height: 40px; */
        font-family: sans-serif;
      }
    }
    /* justify-items: center; */

  }
`;

const EditItemModal = ({editModalContent, closeEditModal}) => {

  const [inputs, setInputs] = React.useState({
    name: editModalContent.name,
    shortDescription: editModalContent.shortDsc,
    longDescription: editModalContent.longDsc,
    price: editModalContent.price,
    inStock: editModalContent.inStock
  });

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const closeModal = () => {

    setIsOpen(false);

    setTimeout(()=>{
      closeEditModal();
    }, 500)
  }

  const setInputValue = (e) => {
    setInputs( { ...inputs, [e.target.id]: e.target.value} );
  }

  // temp display of current editting item
  console.log(inputs);

  return (
    <Main pose={isOpen ? "editopen" : "editclosed"}>
      <Container>
        <Content>
          <div></div>

          <Data pose={isOpen ? "editopen" : "editclosed"}>
            <SvgGearLampEdit />


            <div className="input-grid">
              <div>
                <label htmlFor="name">Item name:</label>
                <input type="text" id="name" value={inputs.name} onChange={(e)=>setInputValue(e)} />
              </div>
              <div>
                <label htmlFor="shortDescription">Item short description:</label>
                <input type="text" id="shortDescription" value={inputs.shortDescription} onChange={(e)=>setInputValue(e)} />
              </div>
              <div>
                <label htmlFor="longDescription">Item long description:</label>
                <textarea rows="4" id="longDescription" value={inputs.longDescription} onChange={(e)=>setInputValue(e)} />
              </div>
              <div>
                <label htmlFor="price">Price per item:</label>
                <input type="number" id="price" value={inputs.price} onChange={(e)=>setInputValue(e)} />
              </div>
              <div>
                <label htmlFor="inStock">Items in stock:</label>
                <input type="number" id="inStock" value={inputs.inStock} onChange={(e)=>setInputValue(e)} />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                
              </div>
            </div>

            <div className="buttons">
              <button onClick={closeModal}>Confirm changes</button>
              <button onClick={closeModal}>Cancel changes</button>
            </div>
          </Data>

        </Content>
      </Container>
    </Main>
  )
}

export default EditItemModal
