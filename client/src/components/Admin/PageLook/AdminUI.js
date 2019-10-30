import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Wrapper } from '../../../layout/StyledComponents';
import ModalUI from './ModalUI';
import { homeImage0, homeImage1, homeImage2, homeImage3, homeImage4, homeImage5 } from '../../../media/index';


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


const AdminUI = () => {


  const [showModal, setShowModal] = useState(null);


  console.log(showModal);
  
  return (
    <React.Fragment>
      
      {(showModal !== null) && <ModalUI setShowModal={setShowModal} modal={showModal} />}

      <Wrapper>
        <Container disableClick={showModal !== null}>
          <Header r={100} >Choose page you'd like to change</Header>

          {linkDatabase.map((section, id) => 
          <section key={id}>
            <span className="change-content" onClick={()=>setShowModal(section)}>change content</span>
            <span className="name">{section.name}</span>
            <span className="endpoint">{section.endpoint}</span>
          </section>
          )}

        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default AdminUI

