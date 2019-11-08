import React, {Fragment} from 'react';
import { SwatchesPicker } from 'react-color';
import styled from 'styled-components';
import posed from 'react-pose';

const ContentPosed = posed.div({
  initialPose: 'closed',
  isopen: {
    rotateX: 0,
    opacity: 1,
    transition: {
      rotateX: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 1500 }
    }
  },
  isclosed: { 
    rotateX: -90,    
    opacity: 0,
    transition: { duration: 1500 }
  }
});
const Content = styled(ContentPosed)`
  padding: 10px;
  z-index: 111;
  transform-origin: center top;
  border: 1px solid black;
  background: whitesmoke;
  width: 60%;
  height: 50vh;
  color: black;
  display: flex; flex-direction: column;
  position: relative;
  @media(max-width: 768px){
    width: 97.5%;
    height: 70vh;
  }
  h1{
    color: black;
  }
  .exit-button{
    width: 120px; height: 30px;
    margin: 10px 0;
  }
  .bottom-buttons{
    width: 100%;
    position: absolute;
    bottom: 0; left: 0;
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
    .submit-btn{
      background: yellowgreen;
    }
  }
`;

/* COLOR PICKER */
const ColorPickerContainerCSS = styled.div`
  border: 1px solid red;
  .color-picker{
    width: 80%!IMPORTANT; 
    margin: 0 auto; display: block;
    padding: 0 20px;
    @media(max-width: 768px){
      width: 100%!IMPORTANT; 
    }
  }
`;
const ColorPickerContent = styled.div`
  height: auto;
  margin: 10px auto;
  display: flex; flex-direction: row;
  flex-wrap: wrap;
  min-height: 40px;
`;
const UiColors = styled.span`
  margin: 2.5px;
  width: 60px; height: 35px;
  background: ${props => props.color};
`;



const CreateItemContent = ({closeModal, modalNumero, nextModal, prevModal}) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const [uiColors, setUiColors] = React.useState([]);
  const [showPicker, setShowPicker] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    name: null,
    longName: null,
    shortDesc: null,
    longDesc: null,
    slugs: [],
    price: null,
    inStock: null,
    colors: []
  })
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  const updateNewItem = (e) => {
    let current = e.target.id;
    let value = e.target.value;

    // check if element should be a number
    if(current === "price" || current === "inStock"){
      value = Number(value);
    }

    setNewItem(prevState => ({...prevState, [current]: value}));
  }

  const splitSlugsIntoArray = (string) => {

    if(typeof string === "string"){
      let slugArr = string    // Spaces can be used to make 2-word slug.
        .split(",")   // coma is a separator of two slugs
        .map(itm => itm.trim())  // Spaces can be used at the beginning(will be trimmed) 
        .filter(itm =>  itm !== "" ); // delete empty slugs made with coma, return only those who are correctly written
      
      setNewItem(prevState => ({...prevState, slugs: slugArr})); 
    }else{
      return
    }
  }

  const showColorPicker = () => {
    //delete data if was open
    if(showPicker){
      setNewItem(prevState => ({...prevState, colors: []}));
      setUiColors([]);
    }
    setShowPicker(prevState => !prevState);
  }

  const handleAddColor = (color) => {
    // check if not applied already, return if true
    let alreadyPicked;
    newItem.colors.forEach(col => {
      if(col === color.hex){
        console.log(color.hex, 'already picked');
        alreadyPicked = true;
      }
    })
    if(alreadyPicked){ return }    // if already picked, end, do not add this color

    // add new color to item-creator
    setNewItem(prevState => ({...prevState, colors: [...newItem.colors, color.hex]}));

    // display colors onto UI
    setUiColors([...uiColors, color.hex]);
    
  }
  const deleteColorFromArray = (color) => {
    // delete color from item-creator
    setNewItem(prevState => ({...prevState, colors: newItem.colors.filter(col => col !== color)}));

    // delete color from UI
    setUiColors(uiColors.filter(col => col !== color));
  }

  const submitNewItem = () => {
    console.log(newItem);
  }
  console.log(newItem);

  return (
    <Content pose={isOpen ? "isopen" : "isclosed"} >
      <h1>page {modalNumero} </h1>
      <button className="exit-button" onClick={closeModal}>Cancel & Exit</button>

      {modalNumero === 1 && 
        <Fragment>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e)=>updateNewItem(e)} value={ (newItem.name !== null) ? newItem.name : ""} />
          <label htmlFor="longName">Long name</label>
          <input type="text" id="longName" onChange={(e)=>updateNewItem(e)} value={ (newItem.longName !== null) ? newItem.longName : ""} />
          <label htmlFor="shortDesc">Short description</label>
          <input type="text" id="shortDesc" onChange={(e)=>updateNewItem(e)} value={ (newItem.shortDesc !== null) ? newItem.shortDesc : ""} />
          <label htmlFor="longDesc">Long description</label>
          <input type="text" id="longDesc" onChange={(e)=>updateNewItem(e)} value={ (newItem.longDesc !== null) ? newItem.longDesc : ""} />
          <label htmlFor="slugs">Tags ',' will split tags</label>
          <input type="text" id="slugs" onChange={(e)=>updateNewItem(e)} value={ (newItem.slugs.length !== 0) ? newItem.slugs : ""} />

          <div className="bottom-buttons">
            <button style={{visibility: "hidden"}}>hidden btn</button>
            <button onClick={()=>{ nextModal(); splitSlugsIntoArray(newItem.slugs)}}>Next</button>
          </div>
        </Fragment>
      }
      {modalNumero === 2 &&
        <Fragment>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" onChange={(e)=>updateNewItem(e)} value={ (newItem.price !== null) ? newItem.price : ""} />
          <label htmlFor="inStock">Stock quantity</label>
          <input type="number" id="inStock" onChange={(e)=>updateNewItem(e)} value={ (newItem.inStock !== null) ? newItem.inStock : ""} />

          <div className="bottom-buttons">
            <button onClick={prevModal}>Previous</button>
            <button onClick={nextModal}>Next</button>
          </div>
        </Fragment>
      }
      {modalNumero === 3 &&
      <Fragment>
        <ColorPickerContainerCSS>
          
          <label htmlFor="colors"> Add Colors<input id="colors" type="checkbox" defaultChecked={uiColors.length > 0 || showPicker} onClick={showColorPicker}/></label>
          {/* {uiColors.length/} */}
          {showPicker &&
          <Fragment>
            <ColorPickerContent>{uiColors.map((hexColor, id) => <UiColors key={id} color={hexColor} onClick={()=>deleteColorFromArray(hexColor)} />)}</ColorPickerContent>

            <SwatchesPicker height="160px" className="color-picker" onChange={handleAddColor} />
          </Fragment>
          }

        </ColorPickerContainerCSS>



        <div className="bottom-buttons">
          <button onClick={prevModal}>Previous</button>
          <button onClick={submitNewItem} className="submit-btn">Submit</button>
        </div>
      </Fragment>
      }

    </Content>
  )
}

export default CreateItemContent
