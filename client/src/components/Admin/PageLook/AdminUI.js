import React, {useState} from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../layout/StyledComponents';
import ModalUI from './ModalUI';


const Container = styled.div`
  width: 100%;
  text-align: center;
  h1{
      font-family: sans-serif;
  }
  section{
    width: 100%; margin: 25px auto 0;
    border-bottom: 1px solid black;
    cursor: pointer;
    &:hover{
      background: lightgrey;
    }
    div{
      padding: 10px;
      display: flex; flex-direction: row;
      justify-content: center;
    }

    span, h2{
      padding: 5px;
      font-family: sans-serif;
      font-size: 2.15rem;
      text-align: center;
    }
  }
`;

const linkDatabase = [
  {
    id: 0, 
    name: "Home page", 
    endpoint: `"/"`,
    sectionQty: 5
  },
  {
    id: 1, 
    name: "Shop", 
    endpoint: `"/shop"`,
    sectionQty: 1
  },
  {
    id: 2, 
    name: "Shop-search", 
    endpoint: `"/shop/search..."`,
    sectionQty: 0
  },
  {
    id: 3, 
    name: "Item", 
    endpoint: `"/shop/item"`,
    sectionQty: 2
  },
  {
    id: 4, 
    name: "Contact", 
    endpoint: `"/contact"`,
    sectionQty: 0
  },
  {
    id: 5, 
    name: "Basket", 
    endpoint: `"/basket"`,
    sectionQty: 1
  }
];

const AdminUI = () => {


  const [showModal, setShowModal] = useState(null);

  console.log(showModal);
  return (
    <React.Fragment>

      {(showModal !== null) && <ModalUI setShowModal={setShowModal} modal={showModal} />}

      <Wrapper>
        <Container>
          <h1>Choose page you'd like to change</h1>

          {linkDatabase.map((section, id) => 
          <section key={id} onClick={()=>setShowModal(section)}>
            <div>
              <h2>{section.name}</h2>
              <span>{section.endpoint}</span>
            </div>
          </section>
          )}

        </Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default AdminUI

