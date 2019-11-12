import React, {Fragment} from 'react';
import axios from 'axios';
import { SwatchesPicker } from 'react-color';
import { UIBtn } from '../../../../layout/ReusableComponents/UIButtons';
import { Content, ColorPickerContainerCSS, ColorPickerContent, DimensionsContainer, UiColors, ImageContainer, MeasurementsInfo } from './CreateItemCSS';



const CreateItemContent = ({closeModal, modalNumero, nextModal, prevModal}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const fileImageInput = React.useRef();

  // COLORS
  const [showPicker, setShowPicker] = React.useState(false);
  const [uiColors, setUiColors] = React.useState([]);

  // DIMENSIONS
  const [showDimensions, setShowDimensions] = React.useState(false);

  //temp
  const [uploadImage, setUploadImage] = React.useState(null);
  const [newItem, setNewItem] = React.useState({
    name: null,
    longName: null,
    shortDesc: null,
    longDesc: null,
    slugs: [],
    price: null,
    inStock: null,
    colors: [],
    dims: { width: null, height: null, length: null, weight: null }
  })
  React.useEffect(()=>{
    setIsOpen(true);
  }, [])

  // 1. UPDATE ITEM
  const updateNewItem = (e) => {
    let current = e.target.id;
    let value = e.target.value;

    // check if element should be a number
    if(current === "price" || current === "inStock"){
      value = Number(value);
    }
    setNewItem(prevState => ({...prevState, [current]: value}));
  }
  // 2. UPDATE ITEM'S DIMENSIONS
  const updateNewItemDim = (e) => {
    let current = e.target.id;
    let value = Number(e.target.value); 

    setNewItem(prevState => ({
      ...prevState,
      dims: {
        ...prevState.dims,
        [current]: value
      }
    }))
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

  // SHOW COLOR PICKER
  const showColorPicker = () => {
    //delete data if was open
    if(showPicker){
      setNewItem(prevState => ({...prevState, colors: []}));
      setUiColors([]);
    }
    setTimeout(()=>{
      setShowPicker(prevState => !prevState);
    }, 400);
  }

  const showDimensionsBlock = () => {
    setTimeout(()=>{
      setShowDimensions(prevState => !prevState);
    }, 400);
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

  const addImages = (e) => {
    console.log(e.target.files[0])
    setUploadImage(e.target.files[0]);
    // console.log('feature coming soon');
  }
  const sendImage = () => {
    const fd = new FormData(); // create a formData object
    fd.append('someImageName', uploadImage, uploadImage.name)
    axios.post('url', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%') // it comes from html object
      }
    })
      .then(res => console.log(res));
  }

  const submitNewItem = () => {
    console.log(newItem);
    
  }

  // console.log(newItem);

  
  
  return (
    <Content pose={isOpen ? "isopen" : "isclosed"} >
{modalNumero !== null ? (
  <>
      <h2>Item creator: page {modalNumero} / 3 </h2>

      <UIBtn exit innerText="Cancel & Exit" fontIcon="fa fa-times" onClick={closeModal} style={{margin: "10px 0", width: "145px"}} />

      {/* PAGE.1 */}
      {modalNumero === 1 && 
        <Fragment>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e)=>updateNewItem(e)} value={ (newItem.name !== null) ? newItem.name : ""} />
          <label htmlFor="longName">Long name</label>
          <input type="text" id="longName" onChange={(e)=>updateNewItem(e)} value={ (newItem.longName !== null) ? newItem.longName : ""} />
          <label htmlFor="shortDesc">Short description</label>
          <input type="text" id="shortDesc" onChange={(e)=>updateNewItem(e)} value={ (newItem.shortDesc !== null) ? newItem.shortDesc : ""} />
          <label htmlFor="longDesc">Long description</label>
          <textarea type="text" id="longDesc" onChange={(e)=>updateNewItem(e)} value={ (newItem.longDesc !== null) ? newItem.longDesc : ""} />
          <label htmlFor="slugs">Tags ',' will split tags</label>
          <input type="text" id="slugs" onChange={(e)=>updateNewItem(e)} value={ (newItem.slugs.length !== 0) ? newItem.slugs : ""} />

          <div className="bottom-buttons">
            <button style={{visibility: "hidden"}}>hidden btn</button>
            <button onClick={()=>{ nextModal(); splitSlugsIntoArray(newItem.slugs)}}>Next</button>
          </div>
        </Fragment>
      }

      {/* PAGE.2 */}
      {modalNumero === 2 &&
        <Fragment>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" onChange={(e)=>updateNewItem(e)} value={ (newItem.price !== null) ? newItem.price : ""} />
          <label htmlFor="inStock">Stock quantity</label>
          <input type="number" id="inStock" onChange={(e)=>updateNewItem(e)} value={ (newItem.inStock !== null) ? newItem.inStock : ""} />

          {/* DIMENSIONS */}
          <DimensionsContainer>
            <div className="center-checkbox">
              <label htmlFor="dimensions"> Include Dimensions</label> 
              <input 
                id="dimensions" 
                type="checkbox" 
                defaultChecked={showDimensions} 
                onClick={showDimensionsBlock}
              />
            </div>

          {showDimensions && 
          <div className="dims-picker">
            <div>
              <label htmlFor="width">Width</label>
              <input type="number" id="width" onChange={(e)=>updateNewItemDim(e)} value={ (newItem.dims.width !== null) ? newItem.dims.width : ""} />
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <input type="number" id="height" onChange={(e)=>updateNewItemDim(e)} value={ (newItem.dims.height !== null) ? newItem.dims.height : ""} />
            </div>
            <div>
              <label htmlFor="length">Length</label>
              <input type="number" id="length" onChange={(e)=>updateNewItemDim(e)} value={ (newItem.dims.length !== null) ? newItem.dims.length : ""} />
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input type="number" id="weight" onChange={(e)=>updateNewItemDim(e)} value={ (newItem.dims.weight !== null) ? newItem.dims.weight : ""} />
            </div>
          </div>
          }
          </DimensionsContainer>

          <MeasurementsInfo>Please make sure you put the measurements in centimeters and weight in kilograms</MeasurementsInfo>

          <div className="bottom-buttons">
            <button onClick={prevModal}>Previous</button>
            <button onClick={nextModal}>Next</button>
          </div>
        </Fragment>
      }

      {/* PAGE.3 */}
      {modalNumero === 3 &&
      <Fragment>

        {/* COLORS */}
        <ColorPickerContainerCSS>

          <div className="center-checkbox">
            <label htmlFor="colors"> Include Colors</label> 
            <input 
              id="colors" 
              type="checkbox" 
              defaultChecked={uiColors.length > 0 || showPicker} 
              onClick={showColorPicker}
            />
          </div>


          {uiColors.length > 0 && <span>Click on box to remove color</span>}
          {showPicker && 
          <Fragment>
            {/* Display chosen colors as inline flex */}
            <ColorPickerContent>{uiColors.map((hexColor, id) => <UiColors key={id} color={hexColor} onClick={()=>deleteColorFromArray(hexColor)} />)}</ColorPickerContent>

            <SwatchesPicker height="160px" className="color-picker" onChange={handleAddColor} />
          </Fragment>
          }
        </ColorPickerContainerCSS>
        


        {/* IMAGES */}
        <ImageContainer>
          <input ref={fileImageInput} type="file" onChange={addImages} style={{display: "none"}} />
          <button onClick={()=>fileImageInput.current.click()}>Pick file</button>
          {(uploadImage !== null) && <button onClick={sendImage}>Send Images <i className="fa fa-file-image-o"></i></button> }
        </ImageContainer>

        <div className="bottom-buttons">
          <button onClick={prevModal}>Previous</button>
          <button onClick={submitNewItem} className="submit-btn">Submit</button>
          <button onClick={submitNewItem} className="submit-btn">Submit & save for future</button>
        </div>
      </Fragment>
      }

      </>
      ) : (null)}
    </Content>
  )

}

export default CreateItemContent
