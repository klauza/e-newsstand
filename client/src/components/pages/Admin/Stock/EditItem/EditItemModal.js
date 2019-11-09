import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { UIBtn } from '../../../../layout/ReusableComponents/UIButtons';
import SvgGearLampEdit from '../../../../../Icons/SvgGearLampEdit';

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
  @media(max-width: 768px){
    z-index: 120;
    overflow-y: scroll;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 120px auto 0;
  @media(max-width: 768px){ 
    width: 100%;
    margin-top: 60px;
    padding-bottom: 60px;
  }
`;
const Content = styled.div`
  /* h2 height + buttons height */
  width: 90%;
  margin: 0 auto;
  display: grid; grid-template-columns: 50px auto;
  @media(max-width: 768px){  
    grid-template-columns: auto;
    .hide-on-mobile{
      display: none;
    }
  }

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
    @media(max-width: 768px){
      margin: 0;
      position: sticky; bottom: 0;
    }
    button{ 
      width: auto;
      margin: 5px;
      padding: 10px;
      @media(max-width: 768px){
        margin: 0; padding: 0;
        width: 100%; height: 40px;
      }
    }
  }

  .input-grid{
    div{
      padding: 5px 0;
      margin: 5px;
      display: grid; grid-template-columns: 1fr 1fr;
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

const EditItemModal = ({editItemData, closeEditModal}) => {

  const [inputs, setInputs] = React.useState({
    name: editItemData.name,
    shortDescription: editItemData.shortDsc,
    longDescription: editItemData.longDsc,
    price: editItemData.price,
    inStock: editItemData.inStock
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
          <div className="hide-on-mobile"></div>

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
              <div>
                <label htmlFor="colors">Change colors:</label>
                <div>#ex 1</div>
                <div>#ex 2</div>
                <div>#ex 3</div>
              </div>
            </div>

            <div className="buttons">
              <UIBtn exit innerText="Cancel changes" onClick={closeModal} />
              <UIBtn success innerText="Confirm changes" onClick={closeModal} />
            </div>
          </Data>

        </Content>
      </Container>
    </Main>
  )
}

export default EditItemModal
