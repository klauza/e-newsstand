import React, {useState} from 'react';
import styled from 'styled-components';
// import posed from 'react-pose';
import { Wrapper } from '../../../layout/StyledComponents';
import ModalUI from './ModalUI';
import { homeImage0, homeImage1, homeImage2, homeImage3, homeImage4, homeImage5 } from '../../../media/index';

import ColorsContext from '../../../context/colorsContext';

const Container = styled.div`
  width: 100%;
  text-align: center;

  section{
    width: 100%; margin: 0 auto;
    border-bottom: 1px solid black;
    display: grid; 
    grid-template-columns: auto auto 200px 200px;
    grid-template-areas: "change-content . name endpoint";
    /* justify-content: center; */

    span{
      border-left: 1px solid black;
      border-right: 1px solid black;
      
      padding: 10px;
      font-family: sans-serif;
      /* font-size: 2.15rem; */
      text-align: center;
      height: 100%;
      line-height: 50px;
    }
    .change-content{
      grid-area: change-content;
      width: auto;
      pointer-events: ${props => props.disableClick ? ('none') : ('auto')};
    cursor: pointer;
      &:hover{
      background: lightgrey;
    }
    }
    .name{
      grid-area: name;
    }
    .endpoint{
      grid-area: endpoint;
    }
  }
`;

const Header = styled.h1`
  font-family: sans-serif;
  margin-bottom: 25px;
  opacity: 0.55;
`;


const Colors = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  /* border: 1px solid grey; */


  .global-colors-header{
    background: black;
    color: white;
    padding: 15px;
  }

  .color-div-items-header{
    display: grid;
    grid-template-columns: 50px 30px 1fr 5fr;
    padding: 10px 5px;
    justify-items: left;
    &>*{
      margin-left: 10px;
    }
  }
`;

const ColorItem = styled.div`
  display: grid;
  grid-template-columns: 50px 30px auto;
  grid-auto-rows: 50px;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 10px 5px;
  

  button{
    width: 100%;height: 100%;
    border: 1px solid white; 
    border-radius: 3px;
    background: #00ff00;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.75);
    cursor: pointer;
  }

  span{
    width: 100%;
    height: 10px;
    background: #000;
  }
  
  .global-colors-container{
    width: 100%; height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    justify-items: center;
    background: #ECEFFF;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.75);
  }
  .global-color{
    
    &__main{
      width: 80%; height: 80%;
      background: ${props => props.mainColor};
      border: 1px solid grey;
    }

    &__secondary-colors{
      border-left: 1px solid grey;
      width: 100%; height: 100%;
      display: grid; 
      grid-template-columns: repeat(${props => props.secondaryQty}, 1fr);
      align-items: center;
      justify-items: center;
    }
  }
`;
const SecondaryColor = styled.div`
  display: block;
  width: 80%; height: 80%;
  border: 1px solid grey;
  background: ${props => props.secondaryColor};
`;


const AdminUI = () => {

  const colorContext = React.useContext(ColorsContext);

  const [showModal, setShowModal] = useState(null);

  
const linkDatabase = [
  {
    id: 0, 
    name: "Home page", 
    endpoint: `"/"`,
    sections: [
      {id: 0, name: 'Hero', img: homeImage0},
      {id: 1, name: 'Trust-Boxes', img: homeImage1},
      {id: 2, name: 'Featured-products', img: homeImage2},
      {id: 3, name: 'About', img: homeImage3},
      {id: 4, name: 'Newest-products', img: homeImage4}
    ]
  },
  {
    id: 1, 
    name: "Shop", 
    endpoint: `"/shop"`,
    sections: [
      {id: 0, name: 'Main', img: "shop-image-0.png"}
    ]
  },
  {
    id: 2, 
    name: "Shop-search", 
    endpoint: `"/shop/search..."`,
    sections: [
      {}
    ]
  },
  {
    id: 3, 
    name: "Item", 
    endpoint: `"/shop/item"`,
    sections: [
      {id: 0, name: 'Gallery', img: "item-image-0.png"},
      {id: 1, name: 'Description', img: "item-image-1.png"}
    ]
  },
  {
    id: 4, 
    name: "Contact", 
    endpoint: `"/contact"`,
    sections: [
      {}
    ]
  },
  {
    id: 5, 
    name: "Basket", 
    endpoint: `"/basket"`,
    sections: [
      {id: 0, name: 'Main', img: "basket-image-0.png"}
    ]
  }
];

const globalColors = [
  {
    id: 1,
    main: "#000",
    secondary: ["#6CC5C2", "#DC8227"]
  },
  {
    id: 2,
    main: "#fff",
    secondary: ["#e84e43", "#4395de", "#c93a52"]
  }
]

  
  return (
    <React.Fragment>
      
      {(showModal !== null) && <ModalUI setShowModal={setShowModal} modal={showModal} />}

      <Wrapper>
        <Container disableClick={showModal !== null}>
          <Header>Choose page you'd like to change</Header>

          {linkDatabase.map((section, id) => 
          <section key={id}>
            <span className="change-content" onClick={()=>setShowModal(section)}>change content</span>
            <span className="name">{section.name}</span>
            <span className="endpoint">{section.endpoint}</span>
          </section>
          )}


          <Header style={{marginTop: "25px"}}>Change color scheme</Header>
          <Colors>
            <div className="global-colors-header">Pick your color palette</div>

            <div className="color-div-items-header">
              <div />
              <div />
              <div>Main color</div>
              <div>Secondary colors</div>
            </div>

            {globalColors.map((col, id) =>
              <ColorItem key={id} mainColor={col.main} secondaryQty={col.secondary.length}>
                <button onClick={()=>colorContext.setGlobalColors(col.main, col.secondary[0])}><i className="fa fa-check"></i></button>
                <span />
                <div className="global-color global-colors-container">
                  <div className="global-color__main"></div>
                  <div className="global-color__secondary-colors">
                    {col.secondary.map((sec, ids)=> <SecondaryColor key={ids} secondaryColor={sec}></SecondaryColor> )}
                  </div>
                </div>
              </ColorItem>
            )}
          </Colors>


        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default AdminUI

