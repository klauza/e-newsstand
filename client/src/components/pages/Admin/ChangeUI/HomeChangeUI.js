import React, {Fragment, useState} from 'react';
// import posed from 'react-pose';
import { Wrapper } from '../../../layout/ReusableComponents/StyledComponents';
import ModalChangeUI from './ModalChangeUI';
import ChangeColorMain from './ChangeColorMain';
import { homeImage0, homeImage1, homeImage2, homeImage3, homeImage4 } from '../../../../media/index';
import { Container, Header } from './ChangeUICSS';



const HomeChangeUI = () => {


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
      
      {(showModal !== null) && <ModalChangeUI setShowModal={setShowModal} modal={showModal} />}

      <Wrapper>
        <Container disableClick={showModal !== null}>

          <Fragment>
            <Header>Choose page you'd like to change</Header>

            {linkDatabase.map((section, id) => 
            <section key={id}>
              <span className="change-content" onClick={()=>setShowModal(section)}>change content</span>
              <span className="name">{section.name}</span>
              <span className="endpoint">{section.endpoint}</span>
            </section>
            )}
          </Fragment>

          <ChangeColorMain globalColors={globalColors} />


        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default HomeChangeUI

